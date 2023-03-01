import React, { useState } from "react";
import axios from "axios";

function Search() {

  const [post, setPost] = useState(null)
function handleClick() {
    axios
    .get(
      "https://api.themoviedb.org/3/movie/201?api_key=7ef821b54fabad2e9b24bac552a96002"
    )
    .then((res) => {
      console.log(res.data);
       setPost(res.data)
    });
}

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Search</button>

      <div>
        <img src={`https://image.tmdb.org/t/p/w200${post ? post.poster_path : null}`} alt="Broken Image" />
        <h2>{ post ? post.title : "Movie Title"}</h2>
        <p>{ post ? post.overview : "Movie Desc"}</p>
      </div>
    </div>
  );
}

export default Search;
