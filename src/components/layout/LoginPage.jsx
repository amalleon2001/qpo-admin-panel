import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/loginbackground.png';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import axiosTripInstance from '../../services/api';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error('Username is required');
      return;
    }
    if (!password.trim()) {
      toast.error('Password is required');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { data } = await axiosTripInstance.post('/admin/login', {
        username,
        password,
      });
      if (data.login?.accessToken) {
        setAuth(data.login.accessToken, data.login.adminProfile);
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) return null;

  return (
    <div className="flex h-screen w-screen bg-[#1c72ff]">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <h2 className="text-white text-3xl font-bold mb-10">Admin Login</h2>
        <form onSubmit={handleLogin} className="w-full max-w-[450px] bg-white p-8 rounded-[10px] shadow-md">
          <div className="relative mb-5">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              required
              className="peer w-full h-12 px-4 border border-gray-400 rounded-md outline-none bg-white
                         focus:border-black"
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 text-base
                         transition-all duration-200 cursor-text
                         peer-focus:top-0 peer-focus:left-3 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-black
                         peer-valid:top-0 peer-valid:left-3 peer-valid:-translate-y-1/2 peer-valid:text-sm peer-valid:text-black"
            >
              Username
            </label>
          </div>

          <div className="relative mb-5">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="peer w-full h-12 px-4 border border-gray-400 rounded-md outline-none bg-white
                         focus:border-black"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 text-base
                         transition-all duration-200 cursor-text
                         peer-focus:top-0 peer-focus:left-3 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-black
                         peer-valid:top-0 peer-valid:left-3 peer-valid:-translate-y-1/2 peer-valid:text-sm peer-valid:text-black"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="block w-full h-[50px] bg-[#1c72ff] text-white font-bold text-sm rounded-[10px] cursor-pointer border-none disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-600 mt-3">{error}</p>}
        </form>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-8">
        <img
          src={BackgroundImage}
          alt="Background"
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
}

export default LoginPage;
