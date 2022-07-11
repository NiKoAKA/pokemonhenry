import React from 'react';
import { useNavigate } from 'react-router-dom';
import landing from './landing.module.css';


const Landing = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/home')
    };

    return (
     <div className={landing.esta}>
        <h6>Bienvenidos</h6>
        <br />
        <p>PI POKEMON Henry 2022</p>
                <div className={landing.estaButton1}>
                  <button onClick={handleClick}>Entrar</button>
                </div>
            </div>
    )
};

export default Landing;