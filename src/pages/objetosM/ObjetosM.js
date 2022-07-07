import './ObjetosM.css';
import React from 'react';
import {Link} from 'react-router-dom';
import buho from '../buho.png';
import varita from'../varita.png';
import libros from'../libros.png';
import potter from'../potter.png';


const Principal=()=>{

    return ( 
    <div >
      <div className='header'>
        <h1>Bienvenid@</h1>
        <h4>A la escuela de go de Howarts</h4>
        </div>
        <div class="container">
          
          <div className='interior'>
        <p>En tu estadia habrá muchas cosas que puedes aprender y lo mejor de todo será aprovecharlas todas. Es por eso que pensamos un sistema especial para tí.
          La liga se basa en puntos que puedes obtener jugando, y de acuerdo a la cantidad que consigas ganar desbloquearas objetos con un enore poder que te ayudaran a enfrentarte a grandes enemigos!</p>
        <ul> <p>Recompensas por puntos:</p>
          
            <li>5   <img src={buho} className='buho'/> </li>
            <li>15 <img src={varita} className='buho'/></li>
            <li>25 <img src={libros} className='buho'/></li>
            <li>35 <img src={potter} className='buho'/></li>
            <li>45 <img src={buho} className='buho'/></li>
            <li>55 <img src={buho} className='buho'/></li>
            <li>75 <img src={buho} className='buho'/></li>

        </ul>
        <button><Link to='/'>Volver</Link></button>
        </div>
          </div>


        
      </div>

    )
  }
export default Principal;