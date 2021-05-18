import React, { useEffect, useState } from 'react';
import Movies from './data.js';
import MovieCard from './components/movieCard.js';
import Header from './components/header.js';
import Cupom from './components/cupom.js';
import back from './images/bg-promotion.svg';
import Bag from './components/bag.js'
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
    <div className="App">
      <Header />
      <div className="content">
        <Cupom src={back} />
        <div className="top-movie-list">
          <div className="top-movie-title">
            Top Filmes</div>
          {movieList.slice(3, 8).map((item) => (
            <MovieCard preco={item.price} titulo={item.title} src={item.backgroundImg} movieRate={item.starsCount} />
          ))}
        </div>

        <div className="movie-list" >
          <h2>Filmes</h2>
          {movieList.map((item) => (
            <MovieCard preco={item.price} titulo={item.title} src={item.backgroundImg} movieRate={item.starsCount} />
          ))}
        </div>
      </div>
      <Bag />
    </div>
  );
}

export default App;
