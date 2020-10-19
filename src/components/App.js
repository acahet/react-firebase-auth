import React, { Component, useContext } from 'react';
import '../App.css';

import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AuthProvider, { AuthContext } from './AuthProvider';

function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				!!currentUser ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	);
}
class App extends Component {
	render() {
		return (
			<AuthProvider>
				<Router>
					<Route exact path="/" component={Home} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Router>
			</AuthProvider>
		);
	}
}

export default App;
