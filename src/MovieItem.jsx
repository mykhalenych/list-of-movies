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
        alt=""
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
            className="btn btn-secondary"
            onClick={()=>{
              this.setState({
                toWatch: true
              })
              addMoveToWillWatch(movie)
            }}
            >Add Will Watch
          </button>)
          }
          </div>
            
       </div>
       <button className="btn secondary-btn"
            onClick={this.props.removeMovie.bind(this, this.props.movie)}>
            Delete button</button>
    </div>
    )
  }
}


export default MovieItem