import React, { Component } from "react";

export default class Chrono extends Component {
	static staticProps = {
		title: "",
		onSave: () => {}
	};

	state = {
		ms: this.format(0),
		s: this.format(0),
		m: this.format(0)
	};

	intervalId;

	start() {
		if (this.intervalId) clearInterval(this.intervalId);
		this.intervalId = setInterval(() => {
			let { ms, s, m } = this.state;

			if (ms != 99) ms++;
			else if (s != 59) {
				s++;
				ms = 0;
			} else {
				m++;
				s = 0;
				ms = 0;
			}
			this.setState({
				ms: this.format(ms),
				s: this.format(s),
				m: this.format(m)
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
			m: this.format(0)
		});
		clearInterval(this.intervalId);

		this.props.onReset();
	}

	format(number, minimumInteger = 2) {
		return new Intl.NumberFormat("fr-FR", {
			minimumIntegerDigits: minimumInteger
		}).format(number);
	}

	save() {
		const { ms, s, m } = this.state;
		this.props.onSave({ ms, s, m });
	}

	render() {
		const { ms, s, m } = this.state;

		return (
			<div>
				<h1>TP : Chronomètre</h1>

				<p id="chrono">
					<span id="hours">{m}</span> : <span id="minutes">{s}</span> :
					<span id="seconds">{ms}</span>
				</p>

				<input id="start" type="button" value="start" onClick={this.start.bind(this)} />
				<input id="stop" type="button" value="stop" onClick={() => this.stop()} />
				<input id="reset" type="button" value="reset" onClick={() => this.reset()} />
				<input id="save" type="button" value="save" onClick={() => this.save()} />
			</div>
		);
	}
}
