import React from 'react';
import './App.css';

function App() {
	let i = 0;
	const myStyle = {
		fontsize: 100,
		color: '#FF0000'
	};

	return (
		<div className="App">
			Hello World!
			<br/>

			{i === 1 ? 'True!' : 'False'}
			<br/>

			<h1 style={myStyle}>Header</h1>
			<br/>

			{/*Komentarz wieloliniowy*/}

			<Header/>
			<Content/>
		</div>
	);
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<h1>Content</h1>
			</div>
		);
	}
}

export default App;
