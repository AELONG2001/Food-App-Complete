import * as React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import './styles.scss';
import 'react-toastify/dist/ReactToastify.min.css';

export interface ToastBodyProps {
	title: string;
	desc: string;
	icon: boolean;
}

export default function ToastBody({ title, desc, icon }: ToastBodyProps) {
	return (
		<div className="toast__box">
			<div className="toast__box-icon">
				{icon ? (
					<DoneIcon sx={{ color: '#20bf6b !important' }} />
				) : (
					<SettingsIcon sx={{ color: '#3598db' }} />
				)}
			</div>
			<div className="toast__box-content">
				<h4>{title}</h4>
				<p>{desc}</p>
			</div>
		</div>
	);
}
