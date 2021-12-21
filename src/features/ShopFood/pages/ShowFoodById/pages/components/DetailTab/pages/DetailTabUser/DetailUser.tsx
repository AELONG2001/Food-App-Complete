import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import DialogComponent from 'components/common/Dialog';
import { useState, useRef } from 'react';
import { detailTabAction, selectComment } from '../../DetailTabSlice';
import './styles.scss';

function DetailTabUser() {
	const [isShow, setIsShow] = useState(false);

	const ref = useRef<HTMLFormElement>(null);

	const dispatch = useAppDispatch();
	const comments = useAppSelector(selectComment);

	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	const handleTabUser = () => {
		if (!userAvatar && !imgFb) {
			setIsShow(true);
		} else {
			setIsShow(false);
			dispatch(detailTabAction.getComment(comments as any));
			dispatch(detailTabAction.setComment(''));
			ref.current!.reset();
		}
	};

	return (
		<>
			<div className="detail-tab-user">
				<Avatar
					src={userAvatar || (imgFb as any)}
					className="detail-tab-user__avatar"
					alt="Avatar"
				/>

				<form ref={ref} className="detail-tab-user__form">
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
						onChange={(e) => dispatch(detailTabAction.setComment(e.target.value as any))}
						className="detail-tab-user__textarea"
						placeholder="Write your comment here..."
					/>
					<Button
						onClick={handleTabUser}
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
