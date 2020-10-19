import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase/firebase';

const Dashboard = ({ history }) => {
	const handleLogout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				history.push('/');
			})
			.catch((error) => {
				alert(`Error during logout ${error.message}`);
			});
	};
	return (
		<div>
			<h1>Dashboard: means you logged in</h1>
			<div>
				<button type="submit" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default withRouter(Dashboard);
