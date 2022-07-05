import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearPage, deletePokemonDb, getDetail} from "../actions";
import { useEffect } from "react";
import style from '../styles/Details.module.css'
import loadingGif from '../img/pikachu.gif'
import dinoErr from '../img/Dino-Err.jpg'

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getDetail(props.match.params.id))
    return( ()=>{
        dispatch(clearPage())
    })
    //eslint-disable-next-line
},[dispatch])
// useEffect(()=>{
//     dispatch(deletePokemonDb())
// })
const history=useHistory()
const characterDetail = useSelector((state)=>state.detail)
const handleClick=(e)=>{
        let text = "¿Quieres Eliminar a este Pokémon??"
        if (window.confirm(text) == true) {
            //eslint-disable-line
            dispatch(deletePokemonDb(characterDetail.id));
            alert('Pokémon Eliminado con éxito')
            history.push('/home')
          } else {
            return null
          }
}
return(
    <div className={style.div}>
        <Link className={style.link} to='/home'><button className={style.btn}>HOME</button></Link>
       
        {
            Object.keys(characterDetail).length!==0?
            <div className={style.div1}>
                
                {characterDetail.InDB?<button onClick={handleClick} className={style.btnx}>Borrar Pokemon</button>:null}
                <div className={style.div105}>
                    <h2 className={style.h1}>{characterDetail.name.toUpperCase()}</h2>
                </div>
                <div className={style.div2}>
                    <img src={characterDetail.img?characterDetail.img:dinoErr} alt="" width="150em" height="200em" className={style.img}/>
                    <div className={style.div3}>
                        <p className={style.fuerza}>Fuerza: {characterDetail.hp}</p>
                        <p className={style.fuerza2}>Ataque: {characterDetail.attack}</p>
                        <p className={style.fuerza3}>Defensa: {characterDetail.defense}</p>
                        <p>Velocida: {characterDetail.speed}</p>
                        <p>Peso: {characterDetail.weight}</p>
                        <p>Alturat: {characterDetail.height}</p>
                        <p>Typo: {characterDetail.types.map(m=>m[0].toUpperCase()+m.slice(1)+' ')}</p>
                     </div>
                     
                </div>
            </div>:
           
           <div>
                <img src={loadingGif} alt="" />
                <p className={style.load}>Loading...</p>
            </div>
        }
    </div>
)
}