// export default {
//   testReq: function() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(json =>
//         this.setState({
//           testText: json.title
//         })
//       );
//   }
// };
// list: function() {
// 	let { pokemons, page } = this.state;
// 	fetch(`http://localhost:4000/pokemons?_page=${page}`)
// 	.then( response => response.json())
// 	.then( result => this.setState({
// 		pokemons: pokemons.concat(result),
// 		page: page + 1
// 		})
// 	);
// },

// caught: function() {
// 	let { pokemons, page } = this.state;
// 	fetch(`http://localhost:4000/pokemons?q=Caught&_page=${page}`)
// 	.then( response => response.json())
// 	.then( result => this.setState({
// 		pokemons: pokemons.concat(result),
// 		page: page + 1
// 	})
// 	);
// }

export const getTopic = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};
export const getEveningCourses = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => result)
        .catch(error => new Error(error))
}

export const getLectureExams = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?&_limit=15')
        .then(response => response.json())
        .then(result => result)
        .catch(error => new Error(error))
}

export const getAssesment = () => {
    return fetch('https://jsonplaceholder.typicode.com/users?&_limit=15')
        .then(response => response.json())
        .then(result => result)
        .catch(error => new Error(error))
}

	// list: function() {
	// 	let { pokemons, page } = this.state;
	// 	fetch(`http://localhost:4000/pokemons?_page=${page}`)
	// 	.then( response => response.json())
	// 	.then( result => this.setState({
	// 		pokemons: pokemons.concat(result),
	// 		page: page + 1
	// 		})	
	// 	);
	// },
	
	// caught: function() {
	// 	let { pokemons, page } = this.state;
	// 	fetch(`http://localhost:4000/pokemons?q=Caught&_page=${page}`)
	// 	.then( response => response.json())
	// 	.then( result => this.setState({
	// 		pokemons: pokemons.concat(result),
	// 		page: page + 1
	// 	})
	// 	);
	// }
