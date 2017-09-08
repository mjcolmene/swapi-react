import React, { Component } from 'react';


class Character extends Component {

	render() {
	console.log('Character props', this.props);
		return (
			<div>
				<h2>My name is {this.props.data.name}</h2>
				<h3>Here are my details!</h3>
				{Object.keys(this.props.data).map((key) => { return <p>{key}: {this.props.data[key]}</p>})}
			</div>
		);
	}

}

export default Character;
