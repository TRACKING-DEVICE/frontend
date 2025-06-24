import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    closeLogin();
  };

  return (
    <div>
      <Navbar />

      
      {!isAuthenticated ? (
        <button
          onClick={openLogin}
          className="fixed top-24 left-4 bg-black text-white px-4 py-2 rounded"
        >
          Login
        </button>
      ) : (
        <p className="fixed top-24 left-4 text-green-600">✅ Logged In</p>
      )}

      {showLogin && (
        <LoginModal onClose={closeLogin} onLogin={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
