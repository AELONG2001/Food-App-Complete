import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	buttonScroll: {
		right: 20,
		bottom: 20,
		padding: '6px !important',
		backgroundColor: '#fff !important',
		color: '#ff514e !important',
		borderRadius: '50% !important',
		minWidth: 'unset !important',
		zIndex: 100,
		boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
		'&:hover': {
			color: '#fff !important',
			backgroundColor: '#ff514e !important',
		},
	},
});

export default function ButtonScroll() {
	const classes = useStyles();

	const ref = useRef<HTMLButtonElement>(null);
	const [isShowBtn, setIsShowBtn] = useState(false);

	const handleClickScrollIntoView = () => {
		window!.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 800) {
				setIsShowBtn(true);
			} else {
				setIsShowBtn(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', handleClickScrollIntoView);
		};
	}, []);

	return (
		<>
			{isShowBtn && (
				<Button
					ref={ref}
					onClick={handleClickScrollIntoView}
					className={classes.buttonScroll}
					sx={{ position: 'fixed' }}
				>
					<ExpandLessIcon sx={{ fontSize: 36 }} />
				</Button>
			)}
		</>
	);
}
