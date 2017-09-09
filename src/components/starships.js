import React, { Component } from 'react';

class Starships extends Component {
	render() {
		console.log('Starships props', this.props);
		return(
			<div>
				I fly these ships: {Object.keys( this.props.data ).map( key =>  <p> { this.props.data[key] }</p> )}
			</div>
			);
	}

}

export default Starships;