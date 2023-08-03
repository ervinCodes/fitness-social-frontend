import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import Navbar from './components/Navbar'
import './styles.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SigninPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
