import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const myStyles = makeStyles({
	container:{
		// TODO
	},
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
});

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
// }

class Car extends React.Component {
	constructor(name) {
		super(name);
		this.state = {
			brand: "Ford",
			model: "Mustang",
			year: 1944,
			color: "Red",
			username: '',
			username2: '',
			username3: '',
			age: null,
		};
	}

	present() {
		return 'I have a ' + this.state.brand;
	}

	changeColor = () => this.setState({color: "Blue"});
	helloAnswear = () => alert("General Kenobi!");
	kick = () => {
		const min = 1;
		const max = 100;
		const rand = min + Math.random() * (max - min);
		// this.setState({ random: this.state.random + rand });
		if (rand > 50) alert("Goal!");
		else alert("Miss!");
	};
	changeUsername = (event) => this.setState({username: event.target.value});
	changeUsername2 = (event) => this.setState({username2: event.target.value});
	mySubmitHandler = (event) => {
		event.preventDefault();
		alert('You are submitting ' + this.state.username2);
	};
	changeData = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val})
	};

	render() {
		//return <h1>I am CAR ;)</h1>

		return (
			<div className={myStyles.container}>
				<h1>My {this.state.brand}</h1>
				<br/>

				<p id="text">
					This is a {this.state.color} {this.state.model} from {this.state.year}
				</p>
				<br/>

				{/*<button type="button" id="changeColor" onClick={this.changeColor}>Change Color</button>*/}
				{/*<br/>*/}

				{/*<button type="button" onClick={this.helloAnswear}>Hello There!</button>*/}
				{/*<br/>*/}

				{/*<button type="button" onClick={this.kick}>Kick Football</button>*/}
				{/*<br/>*/}

				<Button className={myStyles.button} onClick={this.changeColor}>Change Color</Button>
				<br/>

				<Button className={myStyles.button} onClick={this.helloAnswear}>Hello There!</Button>
				<br/>

				<Button className={myStyles.button} onClick={this.kick}>Kick Football</Button>
				<br/><br/><br/>

				<form>
					<h1>Hello {this.state.username}</h1>

					<p>Enter your name: </p>

					<input type='text' onChange={this.changeUsername}/>
				</form>
				<br/><br/>

				<form onSubmit={this.mySubmitHandler}>
					<h1>Hello {this.state.username2}</h1>
					<p>Enter your name and submit:</p>
					<input type='text' onChange={this.changeUsername2}/>
					<input type='submit'/>
				</form>

				<form>
					<h1>Hello {this.state.username3} {this.state.age}</h1>
					<p>Enter your name and age:</p>
					<input type='text' name='username3' onChange={this.changeData}/>
					<br/>
					<input type='number' name='age' onChange={this.changeData}/>
				</form>

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
