import React, { useState } from 'react';
import axios from 'axios';
import './LoginModal.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mais-amor-sp-api.onrender.com/users/login', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      alert('Login bem-sucedido!');
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      onClose();
    } catch (error) {
      if (error.response && error.response.data) {
        alert('Erro no login: ' + error.response.data);
      } else {
        alert('Erro no login. Verifique o console para mais detalhes.');
        console.error('Erro ao fazer login:', error);
      }
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <button onClick={onClose} className="login-modal-close">&times;</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuário"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
