import React from 'react';
import { useGoogleLogout, UseGoogleLogoutProps } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const clientId = '113208815372-2sqg2cl1d9fvi8mh9ivbnl532mosff1q.apps.googleusercontent.com';

export default function LogoutPage() {
	const navigate = useNavigate();

	const onLogoutSuccess = () => {
		localStorage.removeItem('userName');
		localStorage.removeItem('userImg');
		localStorage.removeItem('nameFb');
		localStorage.removeItem('imgFb');
		navigate('/');
	};

	const onLogoutFailed = () => {};

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onLogoutFailed,
	} as UseGoogleLogoutProps);

	return (
		<button
			style={{
				display: 'flex',
				alignItems: 'center',
				color: 'rgba(0, 0, 0, 0.84)',
				backgroundColor: 'transparent',
				border: 'none',
			}}
			onClick={signOut}
		>
			<LogoutIcon />
			Logout
		</button>
	);
}
