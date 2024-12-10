import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LogoForm from './pages/form';
import UpdateFacebookURL from './pages/facebook';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<LogoForm />}></Route> */}
        <Route path='/' element={<UpdateFacebookURL />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
