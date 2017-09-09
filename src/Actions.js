import axios from 'axios';


		/** Recursively find all the people from the API
		*   @param	{req} string - the request URL for the SWAPI. In this case it is static
		*	@return	{void}
		*/
export function getResults(req){
		const resList = [];
			// axios does the get
			axios.get(req).then((res) => {
				console.log(res)
				// if there is a next page, go get it
				// if (res.data.next) {
				// 	getResults(res.data.next);
				// }
				// build our array of objects
				resList.push(...res.data.results);
				console.log('resList',resList);
				
				// const characterMap = charList.map((obj => <Character key={obj.name} data={obj} />));
				// this.setState({ characterMap });
			});
				return resList;
		}
	

