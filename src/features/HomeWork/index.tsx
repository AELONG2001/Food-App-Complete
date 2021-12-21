import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { homeWork } from 'constants/home_work';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	homeWork: {
		position: 'relative',
		textAlign: 'center',
	},

	arrowItem: {
		position: 'absolute',
		top: '50%',
		right: '-50px',
		transform: 'translateY(-50%)',
		height: '2.8rem',
		width: '9rem',
		backgroundRepeat: 'no-repeat',
	},

	typoTitle: {
		fontSize: '1.8rem !important',
		fontFamily: '"Pangolin",cursive',
		color: '#fbb403',
		textAlign: 'center',
	},

	typoDesc: {
		fontSize: '3.2rem !important',
		marginTop: '5px',
		fontWeight: '700',
		color: 'rgba(0,0,0,.84)',
		textAlign: 'center',
	},
	step: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		position: 'absolute',
		fontSize: '1.3rem',
		width: '3rem',
		height: '3rem',
		padding: '10px',
		textAlign: 'center',
		textTransform: 'uppercase',
		borderRadius: '50%',
		border: '5px solid #fff',
		color: '#fff',
		backgroundColor: '#ff514e',
		transition: 'all .25s ease',
	},

	typoInfo: {
		fontSize: '1.8rem !important',
		fontWeight: '500 !important',
		margin: '10px 0 !important',
		'&:hover': {
			color: '#ff514e',
			cursor: 'pointer',
		},
	},
});

export default function HomeWork() {
	const classes = useStyles();

	return (
		<Box maxWidth="lg" sx={{ margin: '60px auto' }}>
			<Box>
				<Typography variant="h6" className={classes.typoTitle}>
					Order now!
				</Typography>
				<Typography variant="h4" className={classes.typoDesc}>
					How it works
				</Typography>
			</Box>
			<Grid container mt={6}>
				{homeWork.map((item, idx) => (
					<Grid
						key={idx}
						item
						xs={12}
						sm={6}
						lg={3}
						className={classes.homeWork}
						sx={{ p: { xs: '12px' } }}
					>
						<img src={item.img} alt={item.title} />
						<Box
							className={classes.step}
							sx={{ top: { md: '4px', xs: '12px' }, right: { md: 40, xs: 80 } }}
						>
							<span>{`0${item.step}`}</span>
							<span>{item.desc}</span>
						</Box>
						<Box
							className={classes.arrowItem}
							sx={{ backgroundImage: { md: `url('${item.arrow}')`, xs: 'unset' } }}
						></Box>
						<Box>
							<Typography variant="h5" align="center" className={classes.typoInfo}>
								{item.info}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
