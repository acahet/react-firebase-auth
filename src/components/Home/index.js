import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { Container, Content, Button } from '../../styles'
const Home = () => {
	return (
		<Container>
			<Content>
				<Button to="/login" as={Link}>
					LOGIN
				</Button>
				<Button to="/register" as={Link}>
					REGISTER
				</Button>
			</Content>
		</Container>
	);
};

export default Home;
