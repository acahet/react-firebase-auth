import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Container, Content, Button, Label } from '../../styles';
import firebase from '../../firebase/firebase';

const Register = ({ history }) => {
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { name, email, password } = event.target.elements;

			firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.then(() => {
					firebase.auth.currentUser.updateProfile({
						displayName: name,
					});
					history.push('/dashboard');
				})
				.catch((error) => {
					return alert(error);
				});
		},
		[history]
	);

	return (
		<Container>
			<Content>
				<form onSubmit={handleSignUp}>
					<Label>
						Name
						<input type="string" autoFocus={true} name="name" placeholder="Name" />
					</Label>
					<Label>
						Email
						<input type="email" name="email" placeholder="Email" />
					</Label>
					<Label>
						Password
						<input type="password" name="password" placeholder="Minimum of 6 characters" />
					</Label>
					<Button type="submit">SignUp</Button>
				</form>
			</Content>
		</Container>
	);
};
export default withRouter(Register);
