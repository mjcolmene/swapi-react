import React, { Component } from 'react';

class Species extends Component {
	render() {
		console.log('Species props', this.props);
		return(
			<div>
				I am a: <p> {this.props.data} </p>
			</div>
			);
	}

}

export default Species;