import React from 'react';
import PropTypes from 'prop-types';

const WeatherView = ({ details }) => {
	console.log(details);
	return (
		<div className="weather">
			<h2>Weather</h2>
			<ul>
				<li>Humidity: </li>
			</ul>
		</div>
	);
};

WeatherView.propTypes = {
	details: PropTypes.object
};

export default WeatherView;