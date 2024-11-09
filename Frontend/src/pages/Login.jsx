import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { toast } from "react-hot-toast";

const Login = () => {
  const { login, loading } = useLogin();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userName, password);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="h-[50%] w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 md:w-[35%]">
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Login Chat App</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-white">Username</label>
          <input
            type="text"
            value={userName}
            placeholder='Enter username'
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-white">Password</label>
          <input
            type="password"
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-orange-400 transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <Link to="/signup" className="flex justify-center mt-6 text-white hover:cursor-pointer md:text-lg hover:text-orange-400">
          Don't have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
