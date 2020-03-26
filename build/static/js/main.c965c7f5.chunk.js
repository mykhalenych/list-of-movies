(this["webpackJsonplist-of-movies"]=this["webpackJsonplist-of-movies"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),r=a.n(i),l=(a(13),a(7)),o=a(1),s=a(2),m=a(3),v=a(4),u=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={toWatch:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.addMoveToWillWatch,i=t.removeMovieWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:"card-img"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between aligth-items-center"},c.a.createElement("p",{className:"mb-0"},"Ratting:",a.vote_average),this.state.toWatch?c.a.createElement("button",{onClick:function(){e.setState({toWatch:!1}),i(a)},className:"btn btn-success"},"Remove Will Watch"):c.a.createElement("button",{className:"btn btn-success",onClick:function(){e.setState({toWatch:!0}),n(a)}},"Add Will Watch")),c.a.createElement("button",{className:"btn btn-danger mt-2",id:"delete-btn",onClick:this.props.removeMovie.bind(this,this.props.movie)},"Delete button",c.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}),c.a.createElement("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z","clip-rule":"evenodd"})))))}}]),a}(c.a.Component),d="https://api.themoviedb.org/3",h=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=e.getNextPage,i=e.getPrevPage,r=function(e){return function(t){a(e)}},l=function(e){return"nav-link ".concat(t===e?"active":"")};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item "},c.a.createElement("div",{onClick:r("popularity.desc"),className:l("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{onClick:r("revenue.desc"),className:l("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("div",{onClick:r("vote_count.desc"),className:l("vote_count.desc")},"Vote count")),c.a.createElement("button",{onClick:i,className:"btn btn-outline-primary mr-2"},c.a.createElement("svg",{className:"bi bi-chevron-compact-left",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z","clip-rule":"evenodd"})),"Prev page"),c.a.createElement("button",{onClick:n,className:"btn btn-outline-primary "},"Next page",c.a.createElement("svg",{className:"bi bi-chevron-right",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z","clip-rule":"evenodd"}))))}}]),a}(c.a.Component),p=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateSortBy=function(e){n.setState({sort_by:e})},n.getPrevPage=function(){n.setState({currentPage:n.state.currentPage-1})},n.getNextPage=function(){n.setState({currentPage:n.state.currentPage+1})},n.addMoveToWillWatch=function(e){var t=Object(l.a)(n.state.moviesWillWatch);t.push(e),n.setState({moviesWillWatch:t})},n.removeMovie=function(e){var t=n.state.movies.filter((function(t){return t.id!==e.id}));n.setState({movies:t})},n.removeMovieWillWatch=function(e){var t=n.state.moviesWillWatch.filter((function(t){return t.id!==e.id}));n.setState({moviesWillWatch:t})},n.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",currentPage:2008},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies(),t.currentPage!==this.state.currentPage&&this.getNewPage()}},{key:"getNewPage",value:function(){var e=this;fetch("".concat(d,"/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=50&year=").concat(this.state.currentPage)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))}},{key:"getMovies",value:function(){var e=this;fetch("".concat(d,"/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1","&sort_by=").concat(this.state.sort_by)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"conteiner"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-4 pr-4"},c.a.createElement(h,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy,getPrevPage:this.getPrevPage,getNextPage:this.getNextPage})),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(u,{movie:t,removeMovie:e.removeMovie,addMoveToWillWatch:e.addMoveToWillWatch,removeMovieWillWatch:e.removeMovieWillWatch}))})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",null,"Will Watch:",this.state.moviesWillWatch.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("p",null,e.title))}))))))}}]),a}(c.a.Component);a(14);r.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c965c7f5.chunk.js.map