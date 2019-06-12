import React, { Component } from "react";
import logo from "./logo.svg";
import Chrono from "./component/Chrono";
import List from "./component/List";
import { request } from "./services/request"
import "./App.css";


export class App extends Component {

	state = {
		title: "hey",
		times: [],
		contributors: []
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

	async getContributors() {

		const { contributors } = this.state,
			req = await request("https://api.github.com/repos/BenGrandin/React_CodingFactory/contributors");
		console.log(req);

		this.setState({ contributors: contributors.concat(req) })


	}

	componentDidMount() {
		this.getContributors();
	}

	render() {
		console.log(this.state.times);
		const { contributors } = this.state


		return (
			<div className="App" >
				<Chrono onSave={(...args) => this.saveTime(...args)} onReset={() => this.resetTime()} />
				<List times={this.state.times} />
				<List className="primary-color" times={this.state.times} />
				<p>
					Contributors
				{contributors.map(contributor => <a key={contributor.id} href={contributor.url.replace("api.", "").replace("users/", "")} >{contributor.login}</a>)}
				</p>

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
