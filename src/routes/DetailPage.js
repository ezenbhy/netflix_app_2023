import axios from 'api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [movie, setMovie] = useState({});

  let {movieId} = useParams();
  console.log('useParams()->',useParams());
  console.log("movieId->",movieId);

  useEffect(() => {
    fetchData();
  },[movieId]);

  const fetchData = async () => {
    const request = await axios.get(`/movie/${movieId}`);
    console.log("request->",request);
    setMovie(request.data);
  };

  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  if (!movie) return <div>...loading</div>;
  return (
    <section>
      <img className="modal__poster-img" 
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
      alt={movie.title || movie.name || movie.original_name} />

    </section>
  )
}

export default DetailPage