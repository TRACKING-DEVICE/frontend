import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';



const App = () => {

  
  const isOwnerPath = useLocation().pathname.includes("Owner");
  

  return (
    <div>
<<<<<<< HEAD
      {/* Navbar with login button inside */}
      {!isOwnerPath && (
        <Navbar onLoginClick={openLogin} isAuthenticated={isAuthenticated} />
      )}

      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={closeLogin} onLogin={handleLoginSuccess} />
      )}
=======
      {!isOwnerPath && <Navbar /> }
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
>>>>>>> mark-branch
    </div>
  );
};

export default App;










