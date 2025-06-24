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
      {/* Navbar with login button inside */}
      {!isOwnerPath && (
        <Navbar onLoginClick={openLogin} isAuthenticated={isAuthenticated} />
      )}

      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={closeLogin} onLogin={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;










