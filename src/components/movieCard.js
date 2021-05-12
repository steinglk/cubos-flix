import React from 'react';
import './movieCard.css';

export default function MovieCard(props) {

    return (
        <div className="movieCard" style={{ backgroundImage: `url(${props.src})` }}>
            <div>

            </div>
        </div>
    )
};