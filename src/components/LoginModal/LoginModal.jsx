import { useState, useEffect } from 'react';
import '../RegisterModal/RegisterModal.css';
import { login } from '@/services/AuthService';

const LoginModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);
  useEffect(() => {
    if (!open) {
      setForm({ email: '', password: '' });
      setError('');
      setShowPassword(false);
    }
  }, [open]);

  const handleBackdropClick = e => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <svg width={32} height={32} className="iconClose">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <h2 className="authTitle">Log In</h2>
        <p className="authDescription">Welcome back! Please enter your credentials to access your account and continue your babysitter search. </p>
        <form onSubmit={handleSubmit} className="modal-form">
          <div>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="inputs" autoComplete="off" />
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="inputs"
                autoComplete="new-password"
              />
              <button type="button" className="eye-toggle" onClick={() => setShowPassword(prev => !prev)} tabIndex={-1}>
                {showPassword ? (
                  <svg width={20} height={20} style={{ stroke: '#11101C', fill: 'none' }}>
                    <use href="/sprite.svg#icon-eye-off"></use>
                  </svg>
                ) : (
                  <svg width={20} height={20} style={{ stroke: '#11101C', fill: 'none' }}>
                    <use href="/sprite.svg#icon-eye"></use>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {error && <p className="modal-error">{error}</p>}
          <button type="submit" className="modal-submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
