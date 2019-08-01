import React, { Component } from 'react';

import Restaurants from './Restaurants/Restaurants';
import Weather from './Weather/Weather';

import './App.scss';

class App extends Component {
	render() {
		return (	
			<div className="main">
				<h1>Responsive App</h1>
				<Weather />
				<Restaurants />
			</div>
		);
	}
}

export default App;