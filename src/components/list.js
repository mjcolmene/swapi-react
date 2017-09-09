import React, { Component } from 'react';

import Character from './character.js';
import { getResults } from '../Actions.js';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			characters : []
		};
	}

	componentWillMount() {
		const newState = this.state;
		newState.characters = getResults('https://swapi.co/api/people/');
		console.log(newState);
		this.setState( newState );



		// const charList = [];

		// /** Recursively find all the people from the API
		// *   @param	{req} string - the request URL for the SWAPI. In this case it is static
		// *	@return	{void}
		// */
		// const getResults = (req) => {
		// 	// axios does the get
		// 	axios.get(req).then((res) => {
		// 		console.log(res)
		// 		// if there is a next page, go get it
		// 		// if (res.data.next) {
		// 		// 	getResults(res.data.next);
		// 		// }
		// 		// build our array of objects
		// 		charList.push(...res.data.results);
		// 		console.log(charList);
				
		// 		const characterMap = charList.map((obj => <Character key={obj.name} data={obj} />));
		// 		this.setState({ characterMap });
		// 	});
		}
			// console.log('final charList', charList);
		//getResults('https://swapi.co/api/people/');

		// axios.get('https://swapi.co/api/people/').then((result) => {
		// 	if(result.data.next) {
		// 		console.log(result.data.next);
		// 		axios.get(result.data.next).then((nextResult) => {
		// 			console.log('getting next page');
		// 			console.log(nextResult);
		// 		});
		// 	}

		// console.log('this is our final charList', charList);

		//  	const characters = result.data.results.map((obj => <div key={obj.name.toString()}>{obj.name}</div>));
		//  	console.log(characters);
		//  	this.setState({ characters });

		// });
	

	render() {
		console.log('this.state',this.state);
		return ( 
			<div>
				<h2> This is where the character list will be</h2>
				<Character data={this.state.characters} />
				{ this.state.characters }
			</div>
		);
	}
}

export default List;