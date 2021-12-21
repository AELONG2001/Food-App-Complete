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
		textAlign: 'center',
	},

	review_box: {
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
		},

		'& .MuiTypography-h5': {
			color: 'rgba(0, 0, 0, 0.72) !important',
			margin: '12px 0 4px 0',
		},

		'& .MuiTypography-body1': {
			color: 'rgba(0, 0, 0, 0.72) !important',
			fontWeight: '500',
			padding: '0 16px',
		},
	},
});

export default function ReviewContent() {
	const classes = useStyles();

	return (
		<Box my={10}>
			<Typography
				className={classes.typoHeading}
				variant="h1"
				sx={{ fontSize: { md: '5rem', xs: '3rem' }, fontWeight: { md: '400', xs: '600' } }}
			>
				What customers say about our restaurant
			</Typography>
			{reviewInfos.map((review, idx) => (
				<Card
					key={idx}
					className={classes.review_box}
					sx={{
						flexDirection: { md: 'row-reverse', xs: 'column-reverse' },
						maxWidth: { lg: '100%', md: '600px', sm: '350px', xs: '300px' },
						margin: { md: '60px 0', xs: '60px auto' },
					}}
				>
					<Box className={classes.box_content}>
						<CardContent>
							<Typography variant="h4" sx={{ fontSize: { md: '2rem', xs: '1.7rem' } }}>
								<strong>{review.name}</strong>
								{review.nameDesc}
							</Typography>
							<Typography variant="h5" sx={{ fontSize: { md: '2rem', xs: '1.8rem' } }}>
								{review.job}
								<strong>{review.jobDesc}</strong>
							</Typography>
						</CardContent>
						<Box>
							<Typography variant="body1" sx={{ fontSize: { md: '2rem', xs: '1.6rem' } }}>
								{review.desc}
							</Typography>
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
