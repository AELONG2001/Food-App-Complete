import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import DialogComponent from 'components/common/Dialog';
import LogoutPage from 'features/Auth/Login/Logout';
import { cartActions } from 'features/Cart/CartSlice';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const pages = ['Home', 'Pricing', 'Blog'];

const useStyles = makeStyles({
	logo: {
		width: 72,
		height: 72,
		transform: 'translateY(6px)',
	},

	buttonNav: {
		display: 'flex',
		alignItems: 'center',
		color: '#fff !important',
		margin: '16px 10px !important',
		'&:hover': {
			color: '#ff514e !important',
		},
	},

	shoppingCart: {
		position: 'relative',
		padding: '0 10px',
		marginRight: '40px',
		cursor: 'pointer',
		userSelect: 'none',
		'& .MuiSvgIcon-root': {
			width: '2.8rem',
			height: '2.8rem',
		},
		'& .MuiBox-root': {
			position: 'absolute',
			top: '16px',
			right: '-2px',
			fontSize: '1.4rem',
			width: '2.6rem',
			height: '1.7rem',
			backgroundColor: '#3c40c6',
			borderRadius: '6px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
});

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [isShow, setIsShow] = useState(false);

	const classes = useStyles();
	const ref = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	//name and img google
	const name = localStorage.getItem('userName');
	const img = localStorage.getItem('userImg');

	//name and img facebook
	const nameFb = localStorage.getItem('nameFb');
	const imgFb = localStorage.getItem('imgFb');

	useLayoutEffect(() => {
		const navbar = ref.current;
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				navbar!.style.backgroundColor = 'rgba(0, 0, 0, 0.84)';
				navbar!.style.marginTop = '0';
			} else {
				navbar!.style.backgroundColor = 'transparent';
				navbar!.style.boxShadow = 'unset';
				navbar!.style.marginTop = '5px';
			}
		});
	});

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleLogin = () => {
		navigate('/login');
	};

	const handleShowCart = () => {
		dispatch(cartActions.handleShowCart(true));
	};

	return (
		<>
			<AppBar
				ref={ref}
				position="static"
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					backgroundColor: 'transparent',
					zIndex: 100,
					marginTop: '5 !important',
					transition: '0.2s ease',
					padding: '0 !important',
					boxShadow: 'unset !important',
				}}
			>
				<Container maxWidth="lg">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
						>
							<Link to="/">
								<div className={classes.logo}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.17 151.54">
										<defs>
											<style
												dangerouslySetInnerHTML={{
													__html:
														'.cls-1{fill:#ff514e;}.cls-2{fill:#ec7720;}.cls-3{fill:#fff;}.cls-4{fill:none;stroke:#ff514e;stroke-miterlimit:10;stroke-width:1.2px;}',
												}}
											/>
										</defs>
										<g id="OBJECTS">
											<path
												className="cls-1"
												d="M54.29,163.64a51.86,51.86,0,0,1,8.46-3.32c5.88-1.71,10.48-1.38,13.84.5s5.82,5.2,6.94,10.29.53,9.68-1.44,13.2-5.88,6.22-11.28,7.82c-2.56.76-4.73,1.3-6.61,1.66Q59.24,178.72,54.29,163.64Zm12.53,26a24.65,24.65,0,0,0,3.75-.88c7.78-2.29,10.89-8.07,8.92-16.52-1.73-7.39-7.08-11.23-15.63-8.75a22.19,22.19,0,0,0-4.6,1.83C62.28,175,63.79,179.86,66.82,189.59Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M92,175.59c1.15,5.58,4.82,7.26,8.58,6.67a13.52,13.52,0,0,0,5.57-2c.42,1.16.63,1.74,1,2.9a16.28,16.28,0,0,1-6.61,2.41c-6.28,1-10.94-2.77-12.35-9.61s1.46-13.11,8-14.17c7.34-1.19,10.14,5.26,10.67,9.49a16.41,16.41,0,0,1,.11,2C101,174,98,174.45,92,175.59Zm11-4.87c-.33-2.66-2-6.66-6.57-5.92-4.08.67-5.14,4.89-4.91,7.82C96.06,171.75,98.35,171.37,103,170.72Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M109.55,149.61c1.71-.18,2.57-.26,4.28-.42q1.52,16.94,3,33.85c-1.5.14-2.24.21-3.74.37Q111.34,166.51,109.55,149.61Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M126,152.7a2.62,2.62,0,0,1-5.23.28,2.56,2.56,0,0,1,2.49-2.78A2.53,2.53,0,0,1,126,152.7Zm-2.85,29.87-1.45-23.12c1.65-.11,2.47-.15,4.12-.23.43,9.26.64,13.89,1.07,23.14C125.39,182.43,124.64,182.47,123.15,182.57Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M147.85,181.46a13.23,13.23,0,0,1-6,1.16c-6.21-.11-10.37-4.69-10.56-11.77s4.46-12.48,11.87-12.33a12.93,12.93,0,0,1,5.67,1.37c-.43,1.29-.64,1.93-1.06,3.22a8.84,8.84,0,0,0-4.68-1.24c-5.14-.11-7.87,3.88-7.82,8.72,0,5.36,3.19,8.61,7.33,8.69a10.42,10.42,0,0,0,4.71-1C147.55,179.55,147.65,180.18,147.85,181.46Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M172.18,172.73c-1.19,8.48-6.94,11.45-11.9,11-5.56-.54-9.6-5.33-9.21-12.64.41-7.74,5.63-12,11.89-11.44C169.46,160.27,173.16,165.71,172.18,172.73Zm-17.13-1.56c-.35,5.06,2,9.05,5.7,9.41s6.77-3.06,7.41-8.24c.48-3.89-.8-9.11-5.6-9.57S155.36,166.78,155.05,171.17Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M193.72,182.32c-.55,2.33-1,4.39-1.29,6.19-1.3-.31-2-.46-3.26-.75.24-1.5.36-2.24.61-3.74l-.09,0a8,8,0,0,1-7.63,2.82c-3.19-.61-6.71-3.21-5.42-11.25.85-5.35,1.28-8,2.14-13.37,1.63.26,2.45.4,4.07.68-.89,5.06-1.33,7.58-2.22,12.63-.77,4.34-.09,7.45,3.32,8.12a5.72,5.72,0,0,0,5.75-2.71,6.48,6.48,0,0,0,.8-2c1.23-5.55,1.84-8.33,3.06-13.88,1.62.35,2.43.54,4,.92C196.05,172.49,195.27,175.77,193.72,182.32Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-1"
												d="M198.94,185.7a9.84,9.84,0,0,0,4.44,3c2.68.76,4.38-.31,4.93-2.14s-.15-3.34-2.64-5.22c-3.31-2.51-4.59-5.18-3.88-7.87.94-3.61,4.61-5.85,9.34-4.46a10.92,10.92,0,0,1,5,3c-.77,1-1.15,1.56-1.91,2.61a8.26,8.26,0,0,0-4-2.63c-2.33-.69-4,.34-4.49,2-.51,1.84.55,3,3,4.94,3.23,2.55,4.45,5.08,3.39,8.36-1.24,3.87-4.82,5.7-9.57,4.34a11.35,11.35,0,0,1-5.24-3.06C197.9,187.42,198.24,186.84,198.94,185.7Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-2"
												d="M74.29,203.48a103.15,103.15,0,0,1,15.59-7.34A139,139,0,0,1,106.39,191a144,144,0,0,1,68.93.11,156.79,156.79,0,0,1,32.6,12.23l17.55,8.82-19.19-4.39c-3.48-.8-7.1-1.49-10.68-2.12s-7.2-1.22-10.81-1.71q-10.86-1.48-21.78-2.06a191,191,0,0,0-21.8.15,121.79,121.79,0,0,0-21.36,3.54l-.51-3.47a158.19,158.19,0,0,1,16.79,1.53c5.55.8,11.06,1.8,16.5,3.12a140,140,0,0,1,16.06,4.84,110.38,110.38,0,0,1,15.18,7L180,217c-.64-.27-1.27-.57-1.92-.81l-2-.72c-1.31-.45-2.58-1-3.9-1.41l-4-1.25a157.58,157.58,0,0,0-16.13-3.86c-5.43-1-10.9-1.8-16.39-2.33-2.75-.27-5.5-.49-8.25-.63s-5.52-.27-8.21-.28l-11.92,0,11.42-3.45a116.21,116.21,0,0,1,22-4.29,196.18,196.18,0,0,1,22.35-.56c7.43.3,14.84,1,22.2,1.94a222.08,222.08,0,0,1,22,3.89l-1.64,4.42a164.88,164.88,0,0,0-31.54-12.19A148.69,148.69,0,0,0,157.63,192a142.44,142.44,0,0,0-16.89-1.52,155.44,155.44,0,0,0-17,.4,160.29,160.29,0,0,0-16.88,2.3,153.31,153.31,0,0,0-16.58,4.14A118.42,118.42,0,0,0,74.29,203.48Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-3"
												d="M221.56,100.79c1-7.83-28.05-8.57-57.07,11.49-2.23,1.53-7.48,1.16-10,.19-4.91-1.89-13.53,4.44-22.71,10.3-5.46,3.49-4.2,6.8-4.2,6.8s16.92-10.38,17.7-8.45-11.34,8.24-16.11,10.85a2.31,2.31,0,0,0-1.08,2.75h0a2.3,2.3,0,0,0,3.41,1.22c5.19-3.25,16.42-9.64,17.21-8.23s-17.5,11.26-16.77,11.42c3.48.75,8.71.22,18.49-5.36,4.9-2.79,9.37-5.44,10.67-9.49a10.22,10.22,0,0,1,5.18-6.13C192.2,105.69,218.39,104,218.74,104a3,3,0,0,0,2.63-1.91A5.11,5.11,0,0,0,221.56,100.79Z"
												transform="translate(-54.29 -67.06)"
											/>
											<path
												className="cls-3"
												d="M160.1,91.27C159,84.85,149.54,81.1,139,82.9c-8.26,1.41-14.75,5.78-16.67,10.68-1,2.63-2.87,5-5.55,5.89-31,10-52.33,26.76-46.23,34.93a2.25,2.25,0,0,0,1.07.7,3,3,0,0,0,3.18-.7c.24-.25,18.91-18.7,45.44-29.8a10.21,10.21,0,0,1,8,.21,26.41,26.41,0,0,0,14.67,1.34C153.5,104.35,161.19,97.68,160.1,91.27Zm-9.61,5.46a16.71,16.71,0,0,1-6.83,3.78,22,22,0,0,1-7.67.72,14.26,14.26,0,0,1-7.19-2.47,25.47,25.47,0,0,0,7.23.61,35.32,35.32,0,0,0,7-1.18,21.5,21.5,0,0,0,6.3-2.93,27.56,27.56,0,0,0,5.39-4.85A14.79,14.79,0,0,1,150.49,96.73Z"
												transform="translate(-54.29 -67.06)"
											/>
											<circle className="cls-4" cx="65.66" cy="49.14" r="3.53" />
											<path
												className="cls-4"
												d="M177.31,90.1a4.81,4.81,0,1,1-4.81-4.81A4.81,4.81,0,0,1,177.31,90.1Z"
												transform="translate(-54.29 -67.06)"
											/>
											<circle className="cls-4" cx="50.11" cy="15.82" r="3.2" />
											<circle className="cls-4" cx="103.78" cy={3} r="2.4" />
											<path
												className="cls-4"
												d="M107.61,131a1.61,1.61,0,1,1-1.6-1.6A1.61,1.61,0,0,1,107.61,131Z"
												transform="translate(-54.29 -67.06)"
											/>
										</g>
									</svg>
								</div>
							</Link>
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
						>
							LOGO
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/">
								<Button className={classes.buttonNav} onClick={handleCloseNavMenu}>
									<HomeIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Home
									</Typography>
								</Button>
							</Link>

							<Link to="/popular-food">
								<Button className={classes.buttonNav} onClick={handleCloseNavMenu}>
									<RestaurantMenuIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Order Online
									</Typography>
								</Button>
							</Link>

							<Link to="/review">
								<Button className={classes.buttonNav} onClick={handleCloseNavMenu}>
									<ReviewsIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Reviews
									</Typography>
								</Button>
							</Link>
						</Box>

						<Box className={classes.shoppingCart} onClick={handleShowCart}>
							<ShoppingCartIcon />
							<Box>0</Box>
						</Box>

						<Box className="navbar__account" sx={{ flexGrow: 0, position: 'relative' }}>
							{name || nameFb ? (
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Tooltip title="Open settings">
										<IconButton sx={{ p: 0 }}>
											<Avatar alt="Remy Sharp" src={img || (imgFb as string)} />
										</IconButton>
									</Tooltip>
									<Typography
										sx={{ fontSize: '1.5rem', fontWeight: 600, paddingLeft: 1 }}
										variant="h6"
									>
										{name || nameFb}
									</Typography>
								</Box>
							) : (
								<Box onClick={handleLogin} sx={{ display: 'flex', alignItems: 'center' }}>
									<Tooltip title="Open settings">
										<IconButton sx={{ p: 0 }}>
											<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
										</IconButton>
									</Tooltip>
									<Typography
										sx={{ fontSize: '1.5rem', fontWeight: 600, paddingLeft: 1 }}
										variant="h6"
									>
										SignIn
									</Typography>
								</Box>
							)}
							{name || nameFb ? (
								<ul className="navbar__account-options">
									<li className="navbar__account-option">
										<AccountBoxIcon />
										<span>My account</span>
									</li>
									<li className="navbar__account-option">
										<SellIcon />
										<span>My cart</span>
									</li>
									<li className="navbar__account-option">
										<LogoutPage />
									</li>
								</ul>
							) : (
								<div></div>
							)}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<DialogComponent isShow={isShow} setIsShow={setIsShow} />
		</>
	);
};

export default Navbar;
