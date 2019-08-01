import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getWeather } from '../../store/actions/actionCreators';
import WeatherView from './WeatherView';

class Weather extends Component {
	static propTypes = {
		getWeather: PropTypes.func.isRequired,
		weather: PropTypes.object
	};

	componentDidMount() {
		//having x-domain cors issues ... service call not working, see browswer console
		this.props.getWeather(10012);
	}

	render() {
		return (
			<WeatherView details={this.props.weather} />
		);
	}
}

function mapStateToProps(store) {
	return {
		weather: store.dataReducer.details
	};
}

const mapDispatchToProps = {
	getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);