import React, { useEffect, useState } from 'react';
import Movies from './data.js';
import MovieCard from './components/movieCard.js'
import Header from './components/header.js'
import './App.css'

function App() {
  const [movieList, setMovieList] = useState(Movies);
  useEffect(() => {


    const loadAll = async () => {
      // Pegando toda a lista
      let list = await movieList;
      setMovieList(list);
    }

    loadAll();
  })
  return (
    <div className="page">
      <Header />
      <div className="movie-list" >
        <h2>Filmes</h2>
        {movieList.map((item) => (
          <MovieCard preco={item.price} titulo={item.title} src={item.backgroundImg} />
        ))}
      </div>
    </div>
  );
}

export default App;
