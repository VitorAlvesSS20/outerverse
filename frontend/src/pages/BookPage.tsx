import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data/books';
import { playSound, useAudioPlayer } from '../hooks/useAudio';
import styles from '../styles/BookPage.module.css';

export default function BookPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);

  const book = books.find((b) => b.id === Number(bookId));

  const { pause: pauseAudio, resume: resumeAudio } = useAudioPlayer(
    book?.musicTracks || [],
    currentTrackIndex,
    isAudioPlaying
  );

  if (!book) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Arquivo não encontrado</h1>
          <button onClick={() => navigate('/')}>Voltar para a Home</button>
        </div>
      </div>
    );
  }

  const selectedChapter = book.chapters.find((c) => c.id === selectedChapterId);
  const hasTracks = book.musicTracks.length > 0;

  const handleChapterChange = (chapterId: number) => {
    playSound(undefined, 0.35);
    setSelectedChapterId(chapterId);
    setIsChapterMenuOpen(false);
  };

  const handlePreviousChapter = () => {
    if (selectedChapterId > 1) {
      playSound(undefined, 0.35);
      setSelectedChapterId(Math.max(1, selectedChapterId - 1));
    }
  };

  const handleNextChapter = () => {
    if (selectedChapterId < book.chapters.length) {
      playSound(undefined, 0.35);
      setSelectedChapterId(Math.min(book.chapters.length, selectedChapterId + 1));
    }
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      pauseAudio();
    } else {
      resumeAudio();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handlePreviousTrack = () => {
    if (!hasTracks) return;

    playSound(undefined, 0.35);
    setCurrentTrackIndex(
      currentTrackIndex === 0 ? book.musicTracks.length - 1 : currentTrackIndex - 1
    );
  };

  const handleNextTrack = () => {
    if (!hasTracks) return;

    playSound(undefined, 0.35);
    setCurrentTrackIndex((currentTrackIndex + 1) % book.musicTracks.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobileTopbar}>
        <button
          className={styles.menuButton}
          onClick={() => {
            playSound(undefined, 0.25);
            setIsChapterMenuOpen(true);
          }}
          aria-label="Abrir menu de capítulos"
          aria-expanded={isChapterMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={styles.mobileTitleGroup}>
          <strong>{book.title}</strong>
          <span>
            Cap. {selectedChapterId} / {book.chapters.length}
          </span>
        </div>
      </div>

      <button
        className={`${styles.menuOverlay} ${
          isChapterMenuOpen ? styles.menuOverlayVisible : ''
        }`}
        onClick={() => setIsChapterMenuOpen(false)}
        aria-label="Fechar menu de capítulos"
        tabIndex={isChapterMenuOpen ? 0 : -1}
      />

      <aside className={`${styles.sidebar} ${isChapterMenuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <button
            className={styles.closeMenuButton}
            onClick={() => setIsChapterMenuOpen(false)}
            aria-label="Fechar menu"
          >
            ×
          </button>
          <button
            className={styles.backButton}
            onClick={() => {
              playSound(undefined, 0.35);
              navigate('/');
            }}
          >
            ← VOLTAR
          </button>
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <p className={styles.bookAuthor}>Por {book.author}</p>

          <div className={styles.musicPlayer}>
            <h4 className={styles.playerTitle}>TRILHA SONORA</h4>
            <div className={styles.playerControls}>
              <button
                className={styles.playerBtn}
                onClick={handlePreviousTrack}
                title="Faixa anterior"
                disabled={!hasTracks}
              >
                ⏮
              </button>
              <button
                className={`${styles.playerBtn} ${styles.playBtn}`}
                onClick={toggleAudio}
                title={isAudioPlaying ? 'Pausar' : 'Tocar'}
                disabled={!hasTracks}
              >
                {isAudioPlaying ? '⏸' : '▶'}
              </button>
              <button
                className={styles.playerBtn}
                onClick={handleNextTrack}
                title="Próxima faixa"
                disabled={!hasTracks}
              >
                ⏭
              </button>
            </div>
            <p className={styles.trackInfo}>
              Faixa {hasTracks ? currentTrackIndex + 1 : 0} / {book.musicTracks.length}
            </p>
          </div>
        </div>

        <nav>
          <h3 className={styles.indexTitle}>ÍNDICE</h3>
          <ul className={styles.indexList}>
            {book.chapters.map((chapter) => (
              <li
                key={chapter.id}
                className={`${styles.indexItem} ${
                  selectedChapterId === chapter.id ? styles.active : ''
                }`}
                onClick={() => handleChapterChange(chapter.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleChapterChange(chapter.id);
                  }
                }}
              >
                CAP. {chapter.id}: {chapter.title}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        {selectedChapter && (
          <>
            <header className={styles.contentHeader}>
              <h1 className={styles.contentTitle}>{book.title}</h1>
              <div className={styles.bookMetadata}>
                <div className={styles.tags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <article>
              <h2 className={styles.chapterTitle}>{selectedChapter.title}</h2>
              <div className={styles.chapterContent}>
                {selectedChapter.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            <nav className={styles.chapterNavigation}>
              <button
                className={styles.navButton}
                onClick={handlePreviousChapter}
                disabled={selectedChapterId === 1}
              >
                ← CAPÍTULO ANTERIOR
              </button>
              <span className={styles.chapterCounter}>
                {selectedChapterId} / {book.chapters.length}
              </span>
              <button
                className={styles.navButton}
                onClick={handleNextChapter}
                disabled={selectedChapterId === book.chapters.length}
              >
                PRÓXIMO CAPÍTULO →
              </button>
            </nav>
          </>
        )}
      </main>
    </div>
  );
}
