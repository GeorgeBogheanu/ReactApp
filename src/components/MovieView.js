import Hero from "./HeroView";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import pic from "./movieimg.jpeg"

const MovieView =() =>{
    const { id }= useParams()

    const [movieDetails, setMouvieDetails] = useState({})
    const [isLoading, setIsLoading] =useState(true)

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9824627a2bab695112c4a6fc02bb3277&language=en-US`)
          .then(Response => Response.json())
          .then(data =>{
            setMouvieDetails(data)
            setIsLoading(false)
          })
    },[id])

    function renderMovieDetails(){
      if(isLoading)
        return <Hero text="Loading..." />
      if(movieDetails)
        {let posterURL;
        if(movieDetails.poster_path==null) posterURL= pic;
        else posterURL= `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropURL= `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropURL}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={posterURL} alt="..." className="img-fluid shadow-lg rounded" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">
                  {movieDetails.overview}
                </p>
                <p className="lead">
                  Popularity: {movieDetails.popularity}
                </p>
              </div>
            </div>
          </div>
        </>
        )
    }
  }

    return renderMovieDetails()
  }
export default MovieView;