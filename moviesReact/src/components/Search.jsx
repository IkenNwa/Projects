import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const apiKey = "7ef821b54fabad2e9b24bac552a96002";


  const [post, setPost] = useState();

  useEffect(() => {
    axios
  .get(
    // `https://api.themoviedb.org/3/movie/${Math.floor(Math.random()*1000)}?api_key=${apiKey}`
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
  .then((res) => {
    console.log(res.data.results);
    setPost(res.data.results);
    console.log(post);
  });
  },[]);
  function handleClick() {
      console.log(post);
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Search</button>

      <div>
        {post
          ? post.map((pos) => {
              <div className="container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    pos ? pos.poster_path : null
                  }`}
                  alt="Broken Image"
                />
                <h2>{pos.title}</h2>
                <p>{pos.overview}</p>
              </div>;
            })
          : ""}
      </div>
    </div>
  );
}

export default Search;
