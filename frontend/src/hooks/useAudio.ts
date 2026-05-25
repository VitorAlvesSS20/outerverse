import { useEffect, useRef } from 'react';

const createAudioContext = () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  return AudioContextClass ? new AudioContextClass() : null;
};

const playSoftUiTick = (volume: number) => {
  const audioContext = createAudioContext();

  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(180, now);
  oscillator.frequency.exponentialRampToValueAtTime(96, now + 0.12);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume * 0.16, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.2);
};

export const playSound = (soundUrl?: string, volume: number = 0.5) => {
  if (!soundUrl) {
    playSoftUiTick(volume);
    return;
  }

  const audio = new Audio(soundUrl);
  audio.volume = volume;
  audio.play().catch((err) => {
    console.log('Audio playback failed:', err);
  });
};

export const useAudioPlayer = (
  tracks: string[],
  currentTrackIndex: number,
  isPlaying: boolean
) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  const clearFade = () => {
    if (fadeRef.current) {
      window.clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  };

  const fadeTo = (targetVolume: number, onComplete?: () => void) => {
    const audio = audioRef.current;

    if (!audio) return;

    clearFade();
    fadeRef.current = window.setInterval(() => {
      if (!audioRef.current) return;

      const difference = targetVolume - audio.volume;
      const nextVolume = audio.volume + difference * 0.22;
      audio.volume = Math.max(0, Math.min(targetVolume, nextVolume));

      if (Math.abs(difference) < 0.015) {
        audio.volume = targetVolume;
        clearFade();
        onComplete?.();
      }
    }, 40);
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0;
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;
    const track = tracks[currentTrackIndex];

    if (track && isPlaying) {
      if (audio.src !== track) {
        audio.src = track;
      }
      audio.currentTime = 0;
      audio.volume = 0;
      audio.play().catch((err) => {
        console.log('Audio playback failed:', err);
      });
      fadeTo(0.34);
    } else {
      fadeTo(0, () => audio.pause());
    }

    return () => {
      clearFade();
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentTrackIndex, isPlaying, tracks]);

  const pause = () => {
    if (audioRef.current) {
      fadeTo(0, () => audioRef.current?.pause());
    }
  };

  const resume = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Audio playback failed:', err);
      });
      fadeTo(0.34);
    }
  };

  return { audioRef, pause, resume };
};

