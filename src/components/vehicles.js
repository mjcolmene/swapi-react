import React, { Component } from 'react';

class Vehicles extends Component {
	render() {
		console.log('Vehicles props', this.props);
		return(
			<div>
				I like to drive: {Object.keys( this.props.data ).map( key => { return <p> { this.props.data[key] }</p>} )}
			</div>
			);
	}

}

export default Vehicles;