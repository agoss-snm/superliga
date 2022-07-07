import './Reglas.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Principal=()=>{

    return ( 
    <div >
        <h1>Reglas</h1>
        <button><Link to='/'>Volver </Link></button>
      </div>

    )
  }
export default Principal;