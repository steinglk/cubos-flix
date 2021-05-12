import React, { useEffect, useState } from 'react';
import Movies from './data.js';
import MovieCard from './components/movieCard.js'
import Header from './components/header.js'

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
      <section>

        {movieList.map((item) => (
          <MovieCard titulo={item.title} src={item.backgroundImg} />

        ))}
      </section>
    </div>
  );
}

export default App;
