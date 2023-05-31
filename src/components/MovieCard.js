import { Link } from "react-router-dom";
import pic from "./movieimg.jpeg"

const MovieCard = ({movie}) =>{

  let posterUrl = null
    if(movie.poster_path!=null){
       posterUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }
    else  {posterUrl=pic}
    const detailUrl=`/movies/${movie.id}`
    return(
      <div className="col-lg-3 col-md-4 col-sm-6 my-4">
      <div className="card" style={{width:'18em'}}>
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Details</Link>
        </div>
      </div>
      </div>
    )
  }

  export default MovieCard;