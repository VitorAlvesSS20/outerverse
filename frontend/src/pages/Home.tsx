import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { playSound } from '../hooks/useAudio';
import styles from '../styles/Home.module.css';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/reels/DXjhw4mOtvC/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/VitorAlvesSS20',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Contos não tão heroicos</p>
          <h1 className={styles.title}>— OUTERVERSE —</h1>
          <p className={styles.subtitle}>Antologias de Terror & Suspense</p>
          <p className={styles.author}>Por Verso</p>
          <p className={styles.description}>
            Olá, pode me chamar de Verso, e eu sou um escritor de contos sobrenaturais e fantasiosos com uma estética sombria. Sinta-se a vontade para explorar os arquivos que compartilho aqui, cada um é uma porta de entrada para um universo ferido que possui além das Escrituras: imagens, interações e até mesmo trilhas sonoras.
          </p>
        </div>
      </header>

      <section className={styles.introSection}>
        <div>
          <h2>Entre no Domo</h2>
          <p>
            Cada história funciona como um dossiê narrativo: personagens quebrados,
            mutações, instituições opressivas e fenômenos que parecem científicos até
            começarem a sangrar.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Arquivos disponíveis</h2>
        <div className={styles.grid}>
          {books.map((book) => (
            <article key={book.id} className={styles.bookCard}>
              <div className={styles.coverContainer}>
                <img
                  src={book.coverImage}
                  alt={`Capa de ${book.title}`}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.bookInfo}>
                <p className={styles.archiveCode}>Arquivo 0{book.id}</p>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookDescription}>{book.description}</p>
                <div className={styles.tags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/livro/${book.id}`}
                  onClick={() => playSound(undefined, 0.35)}
                  className={styles.openLink}
                >
                  <button className={styles.openButton}>▶ Abrir arquivo</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>OUTERVERSE</strong>
          <p>Contato e bastidores dos arquivos.</p>
        </div>
        <nav className={styles.socialLinks} aria-label="Redes sociais">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound(undefined, 0.25)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
