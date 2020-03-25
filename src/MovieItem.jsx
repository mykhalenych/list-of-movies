import React from 'react'
// import { moviesData } from './MoviesData';


class MovieItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      toWatch: false,
    }
  }


  render(){
    const {movie, addMoveToWillWatch, removeMovieWillWatch} = this.props

    return (

      <div className="card">
        <img className="card-img-top" 
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        alt="card-img"
        />
      
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between aligth-items-center">
            <p className="mb-0">Ratting:{movie.vote_average}</p>
            {this.state.toWatch ?
            (<button 
            onClick={() => {
              this.setState({
                toWatch:false
              })
              removeMovieWillWatch(movie)

            }}  
            className="btn btn-success">
              Remove Will Watch
            </button> ) 
          : 
          (<button 
            className="btn btn-success"
            onClick={()=>{
              this.setState({
                toWatch: true
              })
              addMoveToWillWatch(movie)
            }}
            >Add Will Watch
          </button>
          
          )
          
          }
          
          </div>
          <button className="btn btn-danger mt-2"
            id="delete-btn"
            onClick={this.props.removeMovie.bind(this, this.props.movie)}>
            Delete button
            <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
            </svg>
        </button>
       </div>
      
    </div>
    )
  }
}


export default MovieItem