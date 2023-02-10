import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import { Route,Routes } from 'react-router-dom';
import Movies from "./data/data.json"
import {useState} from 'react';
function App(){
  const [data,setdata] = useState(Movies);
  return (
    <div>
    <Routes>
    <Route path="/" element = {<MovieList data = {data} setdata = {setdata}/>}/>
    <Route path="/Movie/:id" element = {<Movie data = {data} />} />
    </Routes>
    </div>
  )
}

export default App;
