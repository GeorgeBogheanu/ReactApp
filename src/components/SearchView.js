import Hero from "./HeroView";
import MovieCard from "./MovieCard";

const SearchView= ({keyword, searchResult}) =>{
    let title=`you are searching for ${keyword}`
    const resultsHtml = searchResult && searchResult.map((obj , i) => {
      return <MovieCard movie={obj} key={i} />
    })
    if(searchResult.length===0) return( 
      <div>
        <Hero text={title}/>
        <p className="text-center fs-1">No search found!</p>
      </div>)
    return (
      <>
        <Hero text={title}/>
        {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
        }
      </>
    )
  }


export default SearchView;