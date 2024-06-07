// pages/reports.js

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './reports.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Relatório de Crescimento',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Relatório de Engajamento',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#742774',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Reports() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Relatórios</h1>
        <p>Visualize os relatórios de crescimento e engajamento da nossa comunidade.</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Relatório de Crescimento</h2>
          <Line data={data} options={options} />
        </section>
        <section className={styles.section}>
          <h2>Relatório de Engajamento</h2>
          <Line data={data} options={options} />
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Nossa Comunidade. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
