import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
	const navigate = useNavigate();

	React.useEffect(() => {
		navigate('/dashboard');
	}, []);
};

export default HomeScreen;
