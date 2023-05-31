import Navbar from './components/navbar';
import Home from './components/HomeView';
import About from './components/AboutView';
import  SearchView  from './components/SearchView';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView';
import PageNotFound from './components/pageNotFound';


function App() {
  
  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText]= useState('')

  
  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=9824627a2bab695112c4a6fc02bb3277&language=en-US&query=${searchText}&page=1`)
      .then(Response => Response.json())
      .then(data =>{
        setSearchResult(data.results)
      })
      }
      
    },[searchText])
  

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element= 
          {<SearchView keyword={searchText} searchResult={searchResult}/>} />
        <Route path="/search/movies" element={<SearchView keyword={searchText} searchResult={searchResult}/>} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
