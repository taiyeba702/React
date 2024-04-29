import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

//21ecc26b


import './App.css';
import SearchIcon from './search.svg';
//ways to call api to get all the data about movies
const API_URL = 'http://www.omdbapi.com?apikey=21ecc26b';

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

//main functional component
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //search movies by title
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieMingle</h1>

            <div className="search">                
                <input 
                  placeholder="Search For Movies" 
                  value={searchTerm}  
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
              ? (
                <div className="container"> 
                    {movies.map((movie) =>(
                      <MovieCard movie={movie}/>
                    ) )}
                </div>
                ) : (
                  <div className="empty">
                     <h2>No Movies Found</h2>
                  </div>    
                )}            
        </div>
    );
}

//export every single component to make it a ble to call from other files
export default App;