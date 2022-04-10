import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Basket from './Components/Basket/Basket';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
        <Route path='*' element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
