import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
function App(){
  return (
    <div>
      <div className="bg-red-500 h-12 text-center text-xl pt-3 ">Movies</div>
     <MovieList/>
     <input type="text"></input>
    </div>
  )
}

export default App;
