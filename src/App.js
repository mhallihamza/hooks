import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import { Route,Routes } from 'react-router-dom';
function App(){
  return (
    <div>
    <Routes>
    <Route path="/" element = {<MovieList/>}/>
    <Route path="/Movie/:id" element = {<Movie />} />
    </Routes>
    </div>
  )
}

export default App;
