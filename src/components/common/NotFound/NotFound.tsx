import React from 'react';
import Container from '@mui/material/Container';
import NotFoundImg from 'assets/images/error_404.png';
import './styles.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();

	const GotoHome = () => {
		navigate('/');
	};

	return (
		<Container>
			<div className="not-found">
				<div className="not-found__img">
					<img src={NotFoundImg} alt="Not found" />
				</div>
				<Button
					onClick={GotoHome}
					variant="contained"
					sx={{ fontSize: '1.5rem', lineHeight: '2.4rem', width: '200px' }}
				>
					Go to Home
				</Button>
			</div>
		</Container>
	);
}

export default NotFound;
