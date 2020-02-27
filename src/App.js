import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Frase from './componets/Frase';

const Contenedor = styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;
`;

const Boton = styled.button`
	background: -webkit-linear-gradient(
		top left,
		#007d35 0%,
		#007d35 40%,
		#0f574e 100%
	);
	background-size: 300px;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid black;
	margin-top: 2.5rem;
	transition: background-size 0.8s ease;

	:hover {
		cursor: pointer;
		background-size: 400px;
	}
`;

function App() {
	// State de frases
	const [frase, setFrase] = useState({});

	const consultarAPI = async () => {
		const api = await fetch(
			'http://breaking-bad-quotes.herokuapp.com/v1/quotes',
		);
		const quote = await api.json();
		setFrase(quote[0]);
	};

	// Cargar una frase
	useEffect(() => {
		consultarAPI();
	}, []);

	return (
		<Contenedor>
			<Frase frase={frase} />
			<Boton onClick={consultarAPI}>Obtener Frase</Boton>
		</Contenedor>
	);
}

export default App;
