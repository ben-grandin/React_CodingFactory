import React, { Component } from "react";

export default class Chrono extends Component {
	state = {
		ms: this.format(0),
		s: this.format(0),
		h: this.format(0)
	};

	intervalId;

	start() {
		if (this.intervalId) clearInterval(this.intervalId);
		this.intervalId = setInterval(() => {
			let { ms, s, h } = this.state;

			if (ms != 99) ms++;
			else if (s != 59) {
				s++;
				ms = 0;
			} else {
				h++;
				s = 0;
				ms = 0;
			}
			this.setState({
				ms: this.format(ms),
				s: this.format(s),
				h: this.format(h)
			});
		}, 1);
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.setState({
			ms: this.format(0),
			s: this.format(0),
			h: this.format(0)
		});
		clearInterval(this.intervalId);
	}

	format(number, minimumInteger = 2) {
		return new Intl.NumberFormat("fr-FR", {
			minimumIntegerDigits: minimumInteger
		}).format(number);
	}

	render() {
		const { ms, s, h } = this.state;

		return (
			<div style={{ marginBottom: 100 }}>
				<h1>TP : Chronomètre</h1>

				<p id="chrono">
					<span id="hours">{h}</span> : <span id="minutes">{s}</span> :
					<span id="seconds">{ms}</span>
				</p>

				<input id="start" type="button" value="start" onClick={this.start.bind(this)} />
				<input id="stop" type="button" value="stop" onClick={() => this.stop()} />
				<input id="reset" type="button" value="reset" onClick={() => this.reset()} />
			</div>
		);
	}
}
