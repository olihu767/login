import React, { Component } from 'react';
import { PageHeader, ListGroup } from 'react-bootstrap';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			testApiCall: []
		};
	}

	async componentDidMount() {
		if (!this.props.isAuthenticated) {
			return;
		}

		try {
			const testApiCall = await this.testApiCall();
			this.setState({ testApiCall });
		} catch (e) {
			alert(e);
		}

		this.setState({ isLoading: false });
	}

	testApiCall() {
		return API.get('testApiCall', '/hello');
	}

	renderTestAPI(testApiCall) {
		console.log(testApiCall);
		return testApiCall.message;
	}

	renderLander() {
		return (
			<div className="lander">
				<h1>Welcome to JAMH Data Analytics Dashboard</h1>
				<p>Please login in for reivew</p>
				<div className="pt-3">
					<Link to="/Login" className="btn btn-info btn-lg mr-3">
						Login
					</Link>
				</div>
			</div>
		);
	}

	renderTest() {
		return (
			<div className="class=float-left">
				
				<PageHeader>Welcome to JAMH Data Analytics Dashboard</PageHeader>
				<ListGroup>{!this.state.isLoading && this.renderTestAPI(this.state.testApiCall)}</ListGroup>
			</div>
		);
	}

	render() {
		return <div className="Home">{this.props.isAuthenticated ? this.renderTest() : this.renderLander()}</div>;
	}
}
