import React, { Component } from 'react';

class Films extends Component {
	render() {
		console.log('film props', this.props);
		return(
			<div>
				I was in these films: {Object.keys( this.props.data ).map( key => { return <p> { this.props.data[key] }</p>} )}
			</div>
			);
	}

}

export default Films;