import React from 'react';
import './movieCard.css';


export default function MovieCard(props) {

    return (
        <div className="movieCard" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%),  url(${props.src}) center center / cover no-repeat` }}>
            <div type='checkbox' onChange={'className = "stared"'} className="favStar" ><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83" />
            </svg>
            </div>
            <div className="movieName">
                {props.titulo}
            </div>
            <div className="movieRate">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FBCD6E" />
                </svg>
                <span>{props.movieRate}</span></div>
            <button>Sacola<span className="value--format">R$ {`${Math.floor((props.preco * 100) / 100)},${(props.preco * 100) % 100}`}</span></button>

        </div >
    )
};