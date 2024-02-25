import React, { useContext, useState } from 'react';
import { SiteContext } from '../Context/SiteContext';
import './LoginForm.css';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

function Login() {
  const { handleLogin } = useContext(SiteContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === 'brvnzdmr' && password === '123456') {
      handleLogin();
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <>
      <div className="loginform">
        <div className="wrapper">
          <form onSubmit={handleFormSubmit}>
            <h1>Giriş Yap</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="error">{error}</div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Hatırla
              </label>
              <a href="#"> Şifremi Unuttum? </a>
            </div>
            <button type="submit">Giriş Yap</button>
            <div className="register-link">
              <p>
                {' '}
                Hesabınız yok mu ? <a href="#">Üye Olun</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
