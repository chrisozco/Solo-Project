import './App.css';
import React from 'react'
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import PostForm from './components/PostForm';
import Update from './components/Update';
import Detail from './components/Detail';
import LogReg from './components/LogReg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/logreg' replace/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/post/new' element={<PostForm />} />
          <Route path='/post/edit/:id' element={<Update />} />
          <Route path='/post/:id' element={<Detail />} />
          <Route path='/logreg' element={<LogReg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
