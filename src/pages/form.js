// pages/signup.js

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './signup.module.css';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Cadastro realizado com sucesso!');
      } else {
        setMessage(result.message || 'Erro ao realizar o cadastro.');
      }
    } catch (error) {
      setMessage('Erro ao realizar o cadastro.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register('username', { required: 'Username é obrigatório' })} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email', { required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Senha</label>
          <input type="password" {...register('password', { required: 'Senha é obrigatória' })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
