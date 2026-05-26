import { useTheme, type Theme } from '../context/ThemeContext';
import styles from '../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; color: string }[] = [
    { value: 'red', label: 'Vermelho', color: '#C41E3A' },
    { value: 'blue', label: 'Azul', color: '#3B82F6' },
    { value: 'green', label: 'Verde', color: '#10B981' },
    { value: 'purple', label: 'Roxo', color: '#A855F7' },
  ];

  return (
    <div className={styles.themeToggle}>
      <span className={styles.label}>Tema:</span>
      <div className={styles.buttons}>
        {themes.map((t) => (
          <button
            key={t.value}
            className={`${styles.button} ${theme === t.value ? styles.active : ''}`}
            onClick={() => setTheme(t.value)}
            title={t.label}
            style={
              theme === t.value
                ? { borderColor: t.color, backgroundColor: `${t.color}20` }
                : { borderColor: t.color }
            }
          >
            <span
              className={styles.dot}
              style={{ backgroundColor: t.color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
