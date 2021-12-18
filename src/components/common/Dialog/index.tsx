import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogComponentProps {
	isShow: boolean;
	setIsShow: any;
}

const useStyles = makeStyles({
	dialogTitle: {
		fontSize: '1.6rem !important',
	},

	dialogContent: {
		fontSize: '1.5rem !important',
		fontWeight: '500 !important',
	},

	dialogButtonOne: {
		fontSize: '1.2rem !important',
		color: '#fff !important',
		backgroundColor: '#ff514e !important',
	},

	dialogButtonTwo: {
		fontSize: '1.2rem !important',
		color: 'rgba(0, 0, 0, 0.84) !important',
	},
});

export default function DialogComponent({ isShow, setIsShow }: DialogComponentProps) {
	const classes = useStyles();
	const navigate = useNavigate();

	const handleClose = () => {
		setIsShow(false);
	};

	const handleRedirectToLogin = () => {
		navigate('/login');
	};

	return (
		<div>
			<Dialog
				open={isShow}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle className={classes.dialogTitle}>JOIN WITH US 🚀</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description" className={classes.dialogContent}>
						You are not signed in. Please sign in to use this feature!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button className={classes.dialogButtonTwo} onClick={handleClose}>
						Cancel
					</Button>
					<Button className={classes.dialogButtonOne} onClick={handleRedirectToLogin}>
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
