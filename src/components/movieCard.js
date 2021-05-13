import React from 'react';
import './movieCard.css';

export default function MovieCard(props) {

    return (
        <div className="movieCard" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%),  url(${props.src}) center center / cover no-repeat` }}>
            <div className="favStar"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83" />
            </svg>
            </div>
            <div className="movieName">
                {props.titulo}
            </div>
            <button>Sacola  <span>R$ {`${Math.floor((props.preco * 100) / 100)},${(props.preco * 100) % 100}`}</span></button>
            <div></div>
        </div>
    )
};