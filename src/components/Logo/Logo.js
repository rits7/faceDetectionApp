import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return(
		<div className = 'ma4 mt0'>
		<Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 130, width: 130 }}>
		 <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}}src={brain} alt='logo'/></div>
		</Tilt>
		</div>
		);
}


export default Logo;