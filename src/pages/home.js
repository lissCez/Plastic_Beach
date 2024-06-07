import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem-vindo à Nossa Comunidade</h1>
        <p>Conectando pessoas e promovendo o desenvolvimento através da colaboração.</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Nossa Missão</h2>
          <p>Promover um ambiente acolhedor e colaborativo onde todos possam aprender, crescer e compartilhar conhecimento.</p>
        </section>
        <section className={styles.section}>
          <h2>Nossos Valores</h2>
          <ul>
            <li>Inclusão</li>
            <li>Colaboração</li>
            <li>Transparência</li>
            <li>Inovação</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Junte-se a Nós</h2>
          <p>Faça parte da nossa comunidade e comece a fazer a diferença hoje mesmo.</p>
          <img src="/community.jpg" alt="Comunidade" className={styles.image} />
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Nossa Comunidade. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
