import React from "react";
import './ResultadoGeneral.css';
import img1 from '../../components/img1.png';
import img2 from '../../components/img2.png';
import img3 from '../../components/img3.png';
import img4 from '../../components/img4.png';
import { Link } from "react-router-dom";

const ResultadoGeneral=()=>{
    return ( 

        <div>
    <div className='resultados1'>
<h5>Resultados</h5>
<div class="container">
	<div class="match">
		<div class="match-header">
			<div class="match-status">Actualizado : 5 de Julio 19:00hs</div>
			
			<div class="match-tournament"><img src="https://assets.codepen.io/285131/pl-logo.svg" />Superliga de Invierno</div>
			<div class="match-actions">
			</div>
		</div>
		<div class="match-content">
			<div class="column">
				<div class="team team--home">
					<div class="team-logo">
						<img src={img1} className='img1'/> 
					</div>
					<h2 class="team-name"></h2>
				</div>
			</div>
			<div class="column">
				<div class="match-details">
					<div class="match-referee">
						Puntos <strong>por Equipos</strong>
					</div>
					<div class="match-score">
						<span class="match-score-number match-score-number--leading">95</span>
						<span class="match-score-divider">:</span>
						<span class="match-score-number">40</span>
					</div>
					
					<div class="match-bet-options">
						<button class="match-bet-option">Semana 1</button>
					</div>
					<br></br>
					<button class="match-bet-place">Jugador destacado: <strong>OfcORsEmE</strong></button>
				</div>
			</div>
			<div class="column">
				<div class="team team--away">
					<div class="team-logo">
					<img src={img2} className='img1'/> 
					</div>
					<h2 class="team-name"></h2>
				</div>
			</div>
		</div>
        <div class="match-content">
			<div class="column">
				<div class="team team--home">
					<div class="team-logo">
					<img src={img3} className='img1'/> 
					</div>
					<h2 class="team-name"></h2>
				</div>
			</div>
			<div class="column">
				<div class="match-details">
					<div class="match-score">
						<span class="match-score-number match-score-number--leading">25</span>
						<span class="match-score-divider">:</span>
						<span class="match-score-number">5</span>
					</div>
					
				</div>
				
			</div>
			
			<div class="column">
				<div class="team team--away">
					<div class="team-logo">
					<img src={img4} className='img1'/> 
					</div>
					<h2 class="team-name"></h2>
				</div>
				
			</div>
			
		</div>
		
		<button><Link to='/'>Volver </Link></button>
	</div>
</div>


      </div>
      </div>

    )
  }
export default ResultadoGeneral;