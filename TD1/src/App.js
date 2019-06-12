import React, { Component } from "react";
import logo from "./logo.svg";
import Chrono from "./component/Chrono";
import List from "./component/List";
import "./App.css";

export class App extends Component {

	state = {
		title: "hey",
		times: []
	}

	saveTime(args) {
		let { times } = this.state;

		this.setState({
			// times: times.concat(args),
			times: [...times, args]
		})
	}

	resetTime() {
		this.setState({ times: [] })
	}

	render() {
		console.log(this.state.times);
		return (
			<div className="App" >
				<Chrono onSave={(...args) => this.saveTime(...args)} onReset={() => this.resetTime()} />
				<List times={this.state.times} />
				<List className="primary-color" times={this.state.times} />
				<header className="App-header" style={{ marginTop: 100 }}>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
			</a>
				</header>
			</div>
		)
	}
}

export default App;
