import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
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
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import DialogComponent from 'components/common/Dialog';
import LogoutPage from 'features/Auth/Login/Logout';
import { cartActions } from 'features/Cart/CartSlice';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './styles.scss';
import { selectFoodById } from 'features/ShopFood/shopFoodSlice';
import logo from 'assets/images/logo.png';

const useStyles = makeStyles({
	logo: {
		width: 72,
		height: 72,
		transform: 'translateY(2px)',
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

	navBarMobileOverlay: {
		position: 'fixed',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.65) !important',
		zIndex: '90',
	},
});

const Navbar = () => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const [isShowNav, setIsShowNav] = useState<boolean>(false);

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

	//Amount food cart
	const foodById = useAppSelector(selectFoodById);

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

	const handleLogin = () => {
		navigate('/login');
	};

	const handleShowCart = () => {
		dispatch(cartActions.handleShowCart(true));
	};

	const showNavBarMobile = () => {
		setIsShowNav(true);
	};

	const handleHideNavBarMobile = () => {
		setIsShowNav(false);
	};

	const handleShowLoginForm = () => {
		navigate('/login');
	};

	const handleShowOverlay = () => {
		setIsShowNav(false);
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
									<img src={logo} alt="logo food" width="100" height="100" />
								</div>
							</Link>
						</Typography>

						<Box>
							<MenuIcon
								sx={{ fontSize: 28, display: { xs: 'block', md: 'none' } }}
								onClick={showNavBarMobile}
							/>
						</Box>

						{/* navbar mobile */}
						<div className="burger-nav">
							<div className={isShowNav ? 'burger-nav__content active' : 'burger-nav__content'}>
								<div className="burger-nav__top">
									<div className="burger-nav__account">
										{name || nameFb ? (
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<Avatar src={img || (imgFb as string)} className="burger-nav__icon" />
												<div className="burger-nav__username">{name || nameFb}</div>
											</div>
										) : (
											<div onClick={handleShowLoginForm}>
												<Avatar src="" className="burger-nav__icon" />
											</div>
										)}
									</div>
									<div>
										<CloseIcon
											sx={{ fontSize: 28, paddingRight: '10px !important' }}
											onClick={handleHideNavBarMobile}
										/>
									</div>
								</div>

								<ul className="burger-nav__list">
									<Link to="/">
										<li className="burger-nav__item">
											<ReviewsIcon sx={{ fontSize: 28 }} />
											Home
										</li>
									</Link>

									<Link to="/popular-food">
										<li className="burger-nav__item">
											<RestaurantMenuIcon sx={{ fontSize: 28 }} /> Order online
										</li>
									</Link>

									<Link to="/review">
										<li className="burger-nav__item">
											<ReviewsIcon sx={{ fontSize: 28 }} />
											Review
										</li>
									</Link>

									{name || nameFb ? (
										<li className="burger-nav__item">
											<LogoutIcon sx={{ fontSize: 28 }} />
											Logout
											<LogoutPage />
										</li>
									) : (
										<div></div>
									)}
								</ul>
							</div>
						</div>

						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
								justifyContent: { xs: 'center' },
							}}
						>
							<Link to="/">
								<div className={classes.logo}>
									<img src={logo} alt="logo food" width="100" height="100" />
								</div>
							</Link>
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/">
								<Button className={classes.buttonNav}>
									<HomeIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Home
									</Typography>
								</Button>
							</Link>

							<Link to="/popular-food">
								<Button className={classes.buttonNav}>
									<RestaurantMenuIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Order Online
									</Typography>
								</Button>
							</Link>

							<Link to="/review">
								<Button className={classes.buttonNav}>
									<ReviewsIcon sx={{ fontSize: 28 }} />
									<Typography variant="h6" sx={{ paddingLeft: 1, lineHeight: '1.8rem' }}>
										Reviews
									</Typography>
								</Button>
							</Link>
						</Box>

						<Box className={`${classes.shoppingCart} navbar__cart`} onClick={handleShowCart}>
							<ShoppingCartIcon />
							<Box>{foodById.length}</Box>
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
			{isShowNav && <Box className={classes.navBarMobileOverlay} onClick={handleShowOverlay}></Box>}
		</>
	);
};

export default Navbar;
