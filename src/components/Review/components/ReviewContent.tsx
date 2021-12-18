import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { reviewInfos } from 'constants/ReviewInfos';
import * as React from 'react';

const useStyles = makeStyles({
	typoHeading: {
		fontSize: '5rem !important',
		textAlign: 'center',
		fontWeight: '700',
	},

	review_box: {
		flexDirection: 'row-reverse',
		display: 'flex',
		margin: '60px 0',
		boxShadow: '0 3px 13px 1px rgb(0 0 0 / 9%) !important',
	},

	box_content: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		margin: 'auto',
		'& .MuiTypography-h4': {
			color: 'rgba(0, 0, 0, 0.72) !important',
			fontSize: '2.3rem',
		},

		'& .MuiTypography-h5': {
			color: 'rgba(0, 0, 0, 0.72) !important',
			fontSize: '2.4rem',
			margin: '12px 0 4px 0',
		},

		'& .MuiTypography-body1': {
			color: 'rgba(0, 0, 0, 0.72) !important',
			fontSize: '2rem',
			fontWeight: '500',
			padding: '0 16px',
		},
	},
});

export default function ReviewContent() {
	const classes = useStyles();

	return (
		<Box my={10}>
			<Typography className={classes.typoHeading} variant="h1">
				What customers say about our restaurant
			</Typography>
			{reviewInfos.map((review, idx) => (
				<Card key={idx} className={classes.review_box}>
					<Box className={classes.box_content}>
						<CardContent>
							<Typography variant="h4">
								<strong>{review.name}</strong>
								{review.nameDesc}
							</Typography>
							<Typography variant="h5">
								{review.job}
								<strong>{review.jobDesc}</strong>
							</Typography>
						</CardContent>
						<Box>
							<Typography variant="body1">{review.desc}</Typography>
						</Box>
					</Box>
					<CardMedia
						component="img"
						sx={{ height: '100%', width: 'auto' }}
						image={review.img}
						alt="Live from space album cover"
					/>
				</Card>
			))}
		</Box>
	);
}
