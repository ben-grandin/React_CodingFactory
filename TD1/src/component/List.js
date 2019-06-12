import React, { Component } from "react";
import "./List.css"

export default class List extends Component {
	static defaultProps = {
		className: ""
	}
	state = {
		times: this.props.times
	}

	componentDidUpdate() {
		console.log(this.state.times)
	}

	render() {

		const { times } = this.props
		
		return (
			<div className={'list ' + this.props.className}>
				<h2 className="list__title">List :</h2>
				<ul className="list__items">
					{times.map((time,index) => <li className="list__item" key={index}>{time.m}:{time.s}:{time.ms} </li>)}
				</ul>
			</div>)
	}
}