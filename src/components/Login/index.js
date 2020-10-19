import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Container, Content, Button, Label } from '../../styles';
import firebase from '../../firebase/firebase';
import { AuthContext } from '../AuthProvider';

const Login = ({ history }) => {
	const handleLogin = useCallback(async (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;

		await firebase
			.auth()
			.signInWithEmailAndPassword(email.value, password.value)
			.then((info) => {
				console.log('info from login ', info);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Container>
			<Content>
				<form onSubmit={handleLogin}>
					<Label>
						Email
						<input name="email" autoFocus={true} type="email" placeholder="Enter Your Email" />
					</Label>
					<Label>
						Password
						<input name="password" type="password" placeholder="Enter Your Password" />
					</Label>
					<Button type="submit">Login</Button>
				</form>
			</Content>
		</Container>
	);
};
export default withRouter(Login);
