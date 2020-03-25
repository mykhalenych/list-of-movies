import React from 'react'
class MovieTabs extends React.Component{
 
  render(){
    const {sort_by, updateSortBy, getNextPage,getPrevPage} = this.props
    const handleClick = (value) => {
      return (event) => {
        updateSortBy(value)
      }
    }
    // const getNextPage = (value) => {
    //   return (event) => {
    //     getPage(value++)
    //   }
    // }
    // const getPrevPage = (value) => {
    //   return (event) => {
    //     getPage(value--)
    //   }
    // }
    const getClassLink = (value) => {
      return `nav-link ${sort_by === value ? "active" : ''}`
    }
    return(
      <ul className="tabs nav nav-pills">
      <li className="nav-item ">
        <div 
        onClick={handleClick("popularity.desc")}
        className={getClassLink("popularity.desc")}>
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div 
          onClick={handleClick("revenue.desc")}
          className={getClassLink("revenue.desc")}>
          Revenue desc
        </div>
      </li>
      <li className="nav-item active">
        <div 
          onClick={handleClick("vote_avarage.desc")}         
          className={getClassLink("vote_average.desc")}>
          Vote avarage
        </div>
      </li>
        <button 
          onClick={getPrevPage}         
          className="btn btn-success mr-2">          
          Next year
        </button>
     
      
        <button
        onClick={getNextPage}
          className="btn btn-success " >
          Prev y 
        </button>
      
    </ul>
    )
 
}
}

export default MovieTabs