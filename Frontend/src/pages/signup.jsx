import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp.js';

const SignUp = () => {
  const {signUp}=useSignUp();
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    await signUp(inputs)
  };

  return (
    <div className="h-auto p-4 w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 md:w-[35%] max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-full">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Sign Up
          <span className='text-3xl text-white ml-4'>Chat App</span>
        </h2>
        
        <div className="mb-4">
          <label htmlFor="fullname" className="block mb-1 text-white">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={inputs.fullname}
            placeholder='Enter full name'
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-white">Username</label>
          <input
            type="text"
            id="username"
            value={inputs.username}
            placeholder='Choose a username'
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-white">Password</label>
          <input
            type="password"
            id="password"
            value={inputs.password}
            placeholder='Create password'
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1 text-white">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={inputs.confirmPassword}
            placeholder='Re-enter password'
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block mb-1 text-white">Gender</label>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={inputs.gender === 'male'}
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              className="checkbox checkbox-warning"
            />
            <label htmlFor="male" className="text-white cursor-pointer">Male</label>
            
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={inputs.gender === 'female'}
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              className="checkbox checkbox-warning"
            />
            <label htmlFor="female" className="text-white cursor-pointer">Female</label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-orange-400 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>

        <Link to="/login" className="flex justify-center mt-6 text-white hover:cursor-pointer md:text-lg hover:text-orange-400">Already have an account?</Link>
      </form>
    </div>
  );
};

export default SignUp;