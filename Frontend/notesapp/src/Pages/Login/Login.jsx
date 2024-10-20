import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput'; 
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

 const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter the password.');
      return;
    }

    setError(''); 


    console.log('Logged in with', { email, password });
    
    try{
        const response = await axiosInstance.post("/login",{
          email: email,
          password: password,
        });

        if (response.data && response.data.accessToken){
          localStorage.setItem("token", response.data.accessToken);
          navigate('/dashboard');
        }
    } catch (error){
       //Handle login error
       if (error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
       }else{
        setError("An unexpected error occurred.PLease try again.");
       }
    }
  };

  return (
    <>

      <div className="flex items-center justify-center mt-28">

        <div className="w-96 border rounded bg-white px-7 py-10 shadow-lg">
          <form onSubmit={handleLogin}>

            <h4 className="text-2xl mb-7 text-center font-semibold">Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
 
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="w-full py-3 mt-4 text-white bg-primary rounded hover:bg-primary-dark transition">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{' '}
              <Link to="/signUp" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
