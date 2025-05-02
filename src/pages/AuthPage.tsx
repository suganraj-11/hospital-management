import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if already logged in
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to MediCare</h1>
          <p className="text-gray-600">
            {showLogin ? 'Sign in to access your account' : 'Create an account to get started'}
          </p>
        </div>

        {showLogin ? (
          <LoginForm onSwitchForm={() => setShowLogin(false)} />
        ) : (
          <SignupForm onSwitchForm={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;