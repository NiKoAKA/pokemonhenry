import React from 'react'
import loading from './loading.module.css'
import pikachuLoad from '../images/loading.gif'


const Loading = () => {
    return (
        <div className={loading.containImg}>
            <h1>Estoy Buscando</h1>
            <img src={pikachuLoad} alt="Img not found" />
        </div>
    )
}

export default Loading;