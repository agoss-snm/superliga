import './principal.css';
import React from 'react';
import harry from '../../components/harry.png';
import {Link} from 'react-router-dom';

const Principal=()=>{

    return ( 
    <div >
        <img src={harry} className='harry'/> 
        <h1 className='tittle'>Superliga Harry Potter</h1>
            <div id='bottons'>
                <ul>
            <li><Link to='/resultados'>Resultados</Link></li>
            <br/>
           <li>  <Link to='/objetosmagicos'>Objetos Mágicos</Link></li>
           <br></br>
           <li>  <Link to='/desafiofinal'>Desafio Final</Link></li>
            <br></br>
            <li> <Link to='/reglas'> Reglas</Link></li>
            </ul>
       </div>
      </div>

    )
  }
export default Principal;