import React from 'react';
import './App.css';
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data:
				[
					{
						"id": 1,
						"name": "Jan",
						"age": 12
					},
					{
						"id": 2,
						"name": "Stanisław",
						"age": 45
					}
				],
			i: 0,
			myStyle:
				{
					fontsize: 100,
					color: '#FF0000'
				}
		};
	}

	render() {
		return (
			// <div className="App">
			// 	Hello World!
			// 	<br/>
			//
			// 	{this.state.i === 1 ? 'True!' : 'False'}
			// 	<br/>
			//
			// 	<h1 style={this.state.myStyle}>Header</h1>
			// 	<br/>
			//
			// 	{/*Komentarz wieloliniowy*/}
			//
			// 	<Header/>
			// 	<Content/>
			// 	<br/>
			//
			// 	<table>
			// 		<tbody>
			// 		<tr>{this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}</tr>
			// 		</tbody>
			// 	</table>
			// </div>

			<Car/>
		)
	}
}

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Header</h1>
// 			</div>
// 		);
// 	}
// }
//
// class Content extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Content</h1>
// 			</div>
// 		);
// 	}
// }
//
// class TableRow extends React.Component {
// 	render() {
// 		return (
// 			<tr>
// 				<td>{this.props.data.id}</td>
// 				<td>{this.props.data.name}</td>
// 				<td>{this.props.data.age}</td>
// 			</tr>
// 		)
// 	}
// }

class Car extends React.Component {
	constructor(name) {
		super(name);
		this.state = {
			brand: name,
			model: "Mustang",
			year: 1944,
			color: "Red"
		}
	}

	present() {
		return 'I have a ' + this.state.brand;
	}

	changeColor = () => this.setState({color: "blue"});

	render() {
		//return <h1>I am CAR ;)</h1>
		return (
			<div>
				<h1>My {this.state.brand}</h1>
				<br/>

				<p>
					This is a {this.state.color}
					{this.state.model}
					from {this.state.year}
				</p>
				<br/>

				<button type="button" onClick={this.changeColor}>Change Color</button>

			</div>
		)
	}
}

let myCar = new Car("Ford");
myCar.present();

class Model extends Car {
	constructor(name, mod) {
		super();
		this.model = mod;
	}

	show() {
		return this.present() + ', it is a ' + this.model
	}
}

myCar = new Model("Ford", "Mustang");
myCar.show();

// // OLD
// let hello = function () {
// 	return "Hello World!";
// };
//
// // NEW
// let hello2 = () => {
// 	return "Hello World!";
// };
//
// // 1 JOB
// let hello3 = () => "Hello world!";
//
// // 1 JOB + ARGS
// let hello4 = (arg) => "Hello" + arg;
//
// //1 JOB + 1 ARG
// let hello5 = arg => "Hello" + arg;

export default App;
