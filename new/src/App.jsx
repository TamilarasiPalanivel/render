import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailVerification from './EmailVerification'; // Adjust the path as necessary

import './index.css'; // Assuming you have some global styles
import './App.css'; // Assuming you have some global styles

function App() {
  return (
  
      <Routes>
        
        <Route path="/verify-email" element={<EmailVerification />} /> {/* Email verification route */}
    
      </Routes>
   
  );
}

export default App;