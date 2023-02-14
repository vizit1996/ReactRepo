import React , {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies , setMovies ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState(null);



  const fetchMoviesHandler = useCallback( async() => {
    setIsLoading(true);
    setError(null);

    try{
      const responce = await fetch('https://swapi.dev/api/films/');
      
      if(!responce.ok){
        throw new Error('something went wrong!');

      }
      const data = await responce.json();
      const transformedData = data.results.map(moviesData => {
        return{
          id : moviesData.episode_id,
          title : moviesData.title,
          openingText : moviesData.opening_crawl,
          releaseDate : moviesData.release_date
        }
      }
  
      )
      setMovies(transformedData);
      setIsLoading(false);

    } catch(error){
      setError(error.message);
    }
    setIsLoading(false);
  });  

  useEffect(() => {
    fetchMoviesHandler();  
  },[fetchMoviesHandler]);

  let content = <p>Please click the fetch button </p>;

  if (movies.length>0){
    content = <MoviesList movies={movies} />;
  }

  if (error){
    content = <p>{error}</p>;
  }

  if (movies.length === 0){
    content = <p>Movie not found</p>;
  }
  if(isLoading){
    content = <p>Loading...</p>;
  }
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
