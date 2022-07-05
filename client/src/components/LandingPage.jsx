import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Landing.module.css'

export default function LandingPage(){
    return (
    <div className={style.div}>
        <h1 className={style.h1}>Bienvenido a Pokemon</h1>
        <Link className={style.link} to='/Home'>
            <button className={style.btn}>Entrar</button>
        </Link>
    </div>
    )
}