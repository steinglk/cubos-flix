import React from 'react';
import { useEffect } from "react";
import './cupom.css';
import logo from '../images/bg-promotion.svg'

function Cupom(props) {

    console.log(logo);
    return (
        <div className="cupom" style={{ backgroundImage: `url("${logo}")` }}>
            <div>

                <div><h1>APROVEITE AGORA</h1></div>
            </div>

        </div>
    )
}

export default Cupom;