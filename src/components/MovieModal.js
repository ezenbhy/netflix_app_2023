import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import "styles/MovieModal.css";

function MovieModal({setModalOpen,backdrop_path,overview,release_date,first_air_date,title,name,vote_average}) {
  const ref = useRef();
  
  useOnClickOutside(ref, () => {setModalOpen(false)});

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span className="modal-close" onClick={() => setModalOpen(false)}>X</span>
          <img className="modal__poster-img" alt={title ? title : name} 
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span> {"   "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__details"> 평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal