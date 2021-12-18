import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DialogComponent from 'components/common/Dialog';
import { useState } from 'react';
import './styles.scss';

function DetailTabUser() {
	const [isShow, setIsShow] = useState(false);

	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	const handleShowDialog = () => {
		if (!userAvatar && !imgFb) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
	};

	return (
		<>
			<div className="detail-tab-user">
				<Avatar
					src={userAvatar || imgFb ? userAvatar || imgFb : ('' as any)}
					className="detail-tab-user__avatar"
					alt="Avatar"
				/>

				<form className="detail-tab-user__form">
					<div className="detail-tab-user__row">
						<div className="detail-tab-user__rate">
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
						</div>
					</div>
					<textarea
						className="detail-tab-user__textarea"
						placeholder="Write your comment here..."
					/>
					<Button
						onClick={handleShowDialog}
						sx={{
							fontSize: '1.2rem !important',
							color: '#fff !important',
							backgroundColor: '#ff514e !important',
							border: 'none !important',
						}}
						className="red detail-tab-user__submit"
					>
						Post comment
					</Button>
				</form>
			</div>
			<DialogComponent isShow={isShow} setIsShow={setIsShow} />
		</>
	);
}

export default DetailTabUser;
