import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoForm from './pages/form';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogoForm />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
