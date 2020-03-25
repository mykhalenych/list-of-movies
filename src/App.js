import React from 'react';
import './App.css';
import MovieItem from './MovieItem'
import {API_URL, API_KEY_3, API_KEY_4} from './utils/api'
import MovieTabs from './MovieTabs'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      currentPage: 2010,    
    }
  }
  componentDidMount(){
    console.log("did mount")
    this.getMovies()

  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.sort_by !== this.state.sort_by){
      this.getMovies()
    }
    if(prevState.currentPage !== this.state.currentPage){
      console.log(prevState.currentPage, this.state.currentPage)
      this.getNewPage()
    }
  }
  getNewPage(){
    fetch(`${API_URL}/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=100&year=${this.state.currentPage}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    })
  }
  getMovies(){
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
      return response.json()
      }).then((data) =>{
        this.setState({
          movies: data.results
        })
      })
  }
  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    })
  }
  getPrevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  getNextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }
  addMoveToWillWatch = (movie) => {
    const updateMoviesToWatch = [...this.state.moviesWillWatch]
    console.log(updateMoviesToWatch)
    updateMoviesToWatch.push(movie)

    this.setState({
      moviesWillWatch: updateMoviesToWatch
    })
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function(item){
      return item.id !== movie.id
    })
    console.log(updateMovies  )
    this.setState({
      movies: updateMovies
    })
  }

  removeMovieWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item){
      return item.id !== movie.id
    })
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }
 
  render(){
    return (
      <div className="conteiner">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4 pr-4">
              <MovieTabs 
              sort_by={this.state.sort_by}
              updateSortBy={this.updateSortBy} 
              getPrevPage={this.getPrevPage}
              getNextPage={this.getNextPage} 
              />
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem  movie={movie} removeMovie={this.removeMovie} 
                  addMoveToWillWatch={this.addMoveToWillWatch}
                  removeMovieWillWatch={this.removeMovieWillWatch}
                  />
                </div>
              )
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch:
              {this.state.moviesWillWatch.map((movie) => {
                return(
                  <li key={movie.id} className="list-group-item">
                    <p>{movie.title}</p>
                  </li>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
