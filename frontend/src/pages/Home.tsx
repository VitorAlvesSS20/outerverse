import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { playSound } from '../hooks/useAudio';
import styles from '../styles/Home.module.css';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/seuusuario',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/seuusuario',
  },
];

export default function Home() {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Contos não tão heróicos</p>
          <h1 className={styles.title}>OUTERVERSE</h1>
          <p className={styles.subtitle}>Antologias de Terror & Suspense</p>
          <p className={styles.author}>Por Verso</p>
          <p className={styles.description}>
            Bem-vindo aos arquivos perdidos da Outerverse. Aqui residem relatos de
            acontecimentos que desafiam explicação racional, catalogados como documentos
            proibidos, testemunhos corrompidos e memórias que ainda respiram no escuro.
          </p>
        </div>

        
      </header>

      <section className={styles.introSection}>
        <div>
          <h2>Entre no Domo</h2>
          <p>
            Cada história funciona como um dossiê narrativo: personagens quebrados,
            mutações, instituições opressivas e fenômenos que parecem científicos até
            começarem a sangrar. Escolha um arquivo, acione a trilha e leia como quem
            abre uma porta que talvez não feche de novo.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ARQUIVOS DISPONÍVEIS</h2>
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
                <button className={styles.openButton}>▶ ABRIR ARQUIVO</button>
              </Link>
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
