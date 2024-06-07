import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch('/api/getData')
      .then(response => response.json())
      .then(data => setSubscriptions(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <Layout>
      <h2 className="text-3xl mb-4">Bem-vindo ao Projeto Oceano Sustentável</h2>
      <p className="mb-4">Nosso objetivo é monitorar e reduzir os níveis de plástico nos oceanos usando inteligência artificial e outras tecnologias avançadas.</p>
      <h3 className="text-2xl mb-2">Assinaturas:</h3>
      <ul>
        {subscriptions.map((subscription, index) => (
          <li key={index}>{subscription[1]} - {subscription[2]}</li> // Ajuste conforme suas colunas
        ))}
      </ul>
    </Layout>
  );
}
