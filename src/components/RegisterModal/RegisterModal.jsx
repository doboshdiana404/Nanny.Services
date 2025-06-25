import { useState, useEffect } from 'react';
import './RegisterModal.css';
import { register } from '@/services/AuthService';

const RegisterModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ email: '', username: '', password: '' });
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
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
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
      await register(form.email, form.password, form.username);
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
        <h2 className="authTitle">Registration</h2>
        <p className="authDescription">
          Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.
        </p>
        <form onSubmit={handleSubmit} className="modal-form" autoComplete="off">
          <div>
            <input name="username" placeholder="Name" value={form.username} onChange={handleChange} required className="inputs" autoComplete="off" />
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
