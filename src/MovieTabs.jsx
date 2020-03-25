import React from 'react'
class MovieTabs extends React.Component{
 
  render(){
    const {sort_by, updateSortBy, getNextPage,getPrevPage} = this.props
    const handleClick = (value) => {
      return (event) => {
        updateSortBy(value)
      }
    }

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
          className="btn btn-outline-primary mr-2"> 
            
            <svg className="bi bi-chevron-compact-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z" clip-rule="evenodd"/>
            </svg>
            Prev page
        </button>
     
      
        <button
        onClick={getNextPage}
          className="btn btn-outline-primary " >
            Next page
            <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
            </svg>
            
            
        </button>
      
    </ul>
    )
 
}
}

export default MovieTabs