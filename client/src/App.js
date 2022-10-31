import './App.css';
import React from 'react'
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home';
import PostForm from './components/PostForm';
import Update from './components/Update';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/post/new' element={<PostForm />} />
          <Route path='/post/edit/:id' element={<Update />} />
          <Route path='/post/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
