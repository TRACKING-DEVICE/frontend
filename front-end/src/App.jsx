

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isOwnerPath = useLocation().pathname.includes("Owner");

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    closeLogin();
  };

  return (
    <div>
      {/* Conditionally render Navbar unless it's an Owner route */}
      {!isOwnerPath && <Navbar />}

      {/* Show Login button or status */}
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

      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={closeLogin} onLogin={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;














