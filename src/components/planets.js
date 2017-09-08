import React, { Component } from 'react';

class Planets extends Component {
	render() {
		console.log('Planets props', this.props);
		return(
			<div>
				My homeworld is: <p> {this.props.data} </p>
			</div>
			);
	}

}

export default Planets;