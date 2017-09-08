import React, { Component } from 'react';
import Films from './films.js';
import Planets from './planets.js';
import Species from './species.js';
import Vehicles from './vehicles.js';
import Starships from './starships.js';


class Character extends Component {

	render() {
	console.log('Character props', this.props);
		return (
			<div>
				<h2>My name is {this.props.data.name}</h2>
				<h3>Click here for my details!</h3>
				{/* {Object.keys(this.props.data).map((key) => { return <p>{key}: {this.props.data[key]}</p>})} */}
				<Films data={this.props.data.films} />
				<Planets data={this.props.data.homeworld} />
				<Species data={this.props.data.species} />
				<Vehicles data={this.props.data.vehicles} />
				<Starships data={this.props.data.starships} />
			</div>
		);
	}

}

export default Character;
