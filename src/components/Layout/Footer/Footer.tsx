import { Container, Grid } from '@mui/material';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import BusinessIcon from '@mui/icons-material/Business';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './styles.scss';

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Grid container spacing={8}>
					<Grid item xs={12} sm={6} md={4}>
						<div className="footer__time">
							<div className="col">
								<span className="footer__time-day">Sunday</span>
								<span className="footer__time-day">Monday</span>
								<span className="footer__time-day">Tuesday</span>
								<span className="footer__time-day">Wednesday</span>
								<span className="footer__time-day">Friday</span>
								<span className="footer__time-day">Saturday</span>
							</div>
							<div className="col">
								<LinearScaleIcon className="footer__time-dots" />
								<LinearScaleIcon className="footer__time-dots" />
								<LinearScaleIcon className="footer__time-dots" />
								<LinearScaleIcon className="footer__time-dots" />
								<LinearScaleIcon className="footer__time-dots" />
								<LinearScaleIcon className="footer__time-dots" />
							</div>
							<div className="col">
								<span className="footer__time-hours">Closed</span>
								<span className="footer__time-hours">8.00-20.00</span>
								<span className="footer__time-hours">10.00-5.00</span>
								<span className="footer__time-hours">12.00-9.00</span>
								<span className="footer__time-hours">7.00-1.00</span>
								<span className="footer__time-hours">9.00-12.00</span>
							</div>
						</div>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<div className="footer__contacts">
							<h4 className="footer__contact-title">Address</h4>

							<div className="footer__contact">
								<PhoneInTalkIcon className="footer__contact-icon" />
								<span className="footer__contact-txt">+1900 1900</span>
							</div>

							<div className="footer__contact">
								<SpeakerNotesIcon className="footer__contact-icon" />
								<span className="footer__contact-txt">longkm2708@gmail.com</span>
							</div>

							<div className="footer__contact">
								<BusinessIcon className="footer__contact-icon" />
								<span className="footer__contact-txt">Kinh Mon, Hai Duong, VN</span>
							</div>
							<div className="footer__contact footer__contact--icons">
								<FacebookIcon style={{ fill: '#2D88FF' }} />
								<TwitterIcon style={{ fill: '#5DA9DD' }} />
								<InstagramIcon style={{ fill: '#F56040' }} />
								<YouTubeIcon style={{ fill: '#FF0000' }} />
							</div>
						</div>
					</Grid>

					<Grid item xs={12} md={6} lg={4}>
						<div className="footer__map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59620.62299753151!2d106.28940870009825!3d20.940908740954153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359b46ef2fba69%3A0x2c3c5975d0eceb2e!2zSOG6o2kgRMawxqFuZywgSGFpIER1b25nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1639368886013!5m2!1sen!2s"
								width="600"
								height="450"
								style={{ width: '100%', height: '100%', border: 0 }}
								loading="lazy"
								title="map"
							></iframe>
						</div>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}

export default Footer;
