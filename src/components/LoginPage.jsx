import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/loginbackground.png';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-primary h-screen w-screen">
      <h2 className="text-center text-white text-3xl font-bold mb-5">Login Page</h2>
      <div className="relative">
        <form onSubmit={handleLogin} className="max-w-[500px] bg-white p-5 rounded-[10px] shadow-md" style={{ margin: '250px 50px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-[400px] h-10 m-5 px-2.5 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-[400px] h-10 m-5 px-2.5 border border-gray-300 rounded outline-none"
            required
          />
          <button
            type="submit"
            className="block w-[400px] h-[50px] bg-primary text-white font-bold text-sm rounded-[10px] m-5 cursor-pointer border-none disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-600 mx-5">{error}</p>}
        </form>

        <img
          src={BackgroundImage}
          alt="Background"
          className="absolute"
          style={{ top: '20%', left: '50%', width: '40%', height: '80vh' }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
