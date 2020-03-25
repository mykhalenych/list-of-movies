import React from 'react';
import './App.css';
import {moviesData} from './MoviesData'
const movie = {
  title: "Avenrers Infinity War",
  vote_average: 8.5,
  image: "https://citygeek.fr/boutique/85689-large_default/avengers-infinity-war-pack-posters-characters-61-x-91-cm-5.jpg",
  overview: "loram"
}
function Image(props){
  return(
    <img width="100%"src={props.src} alt={props.title}/>
  )
 
}
// function MoviesItem(props) {
//   console.log(props)
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p >{title}</p>
//       <p>{vote_average}</p>

//     </div>
//   );
// }

class MoviesItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      show: false,
      like: false,
      movies: moviesData
    }
  }
  toggleOverwiev = () => {
    this.setState({
    show: !this.state.show,
  })
}
handleLike = () => {
  this.setState({
  like: !this.state.like
  })
}
  render(){
    const {data: {title, vote_average, image, overview}} = this.props;
    console.log(this.state)
    return(
    
      <div style={{width: "250px"}}>
        <div>{this.state.movies.map(function(movie){
        return <p>{movie.title}</p>
        })}</div>
        <Image src={image} alt={title} />
        <p >{title}</p>
        <p>{vote_average}</p>
        <div style={{display: "flex", 
        justifyContent:"space-between"}} >
          <button type="button" 
          onClick={this.toggleOverwiev}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button type="button" 
          className={this.state.like ? "btn--like" : ''}
           onClick={this.handleLike}>like</button>
        </div>
        {this.state.show ? <p>{overview}</p> :null}
    </div>
    )
  }
}
function App(){
  return (
    <div>
      <MoviesItem data={movie}/>
    </div>
  )
}

export default App;
