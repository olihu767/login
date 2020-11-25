import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';

import './App.css';
// import Navbar from './components/Navbar';
// import CreateDashboard from './pages/CreateDashboard';
// import Dashboards from './pages/Dashboards';

export default ({ childProps }) => (

	<Router>
		<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		<AppliedRoute path="/login" exact component={Login} props={childProps} />
		{/* <AppliedRoute path='/home2' exact component={Home2} props={childProps}/> */}
        {/* <AppliedRoute path='/CreateDashboard' component={CreateDashboard} props={childProps}/>
        <AppliedRoute path='/Dashboards' component={Dashboards} props={childProps}/> */}
		{/* Finally, catch all unmatched routes */}
		<Route component={NotFound} />
		</Switch>
	</Router>

);
