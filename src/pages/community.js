// pages/community.js

import { useEffect, useState } from 'react';
import styles from './community.module.css';

export default function Community() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch('http://localhost:8080/api/users');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setError('Erro ao carregar os membros da comunidade.');
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Comunidade</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <p><strong>Username:</strong> {member.username}</p>
            <p><strong>Email:</strong> {member.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
