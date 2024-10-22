import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(""); 
  };

  return (
    <>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10 shadow-lg'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7 text-center font-semibold'>Sign Up</h4>
 
            <input
              type='text'
              placeholder='Name'
              className='w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type='text'
              placeholder='Email'
              className='w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
            <button type='submit' className='w-full py-3 mt-4 text-white bg-primary rounded hover:bg-primary-dark transition'>
              Create Account
            </button>

            <p className='text-sm text-center mt-4'>
              Already have an account?{" "}
              <Link to='/dashboard' className='font-medium text-primary underline'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
