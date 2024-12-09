import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/form';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
