import { useAppSelector } from 'app/hooks';
import React from 'react';
import { selectListComment } from '../../DetailTabSlice';
import DetailTabUser from '../DetailTabUser/DetailUser';
import Avatar from '@mui/material/Avatar';
import './styles.scss';

function DetailTabComment() {
	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	const nameGoogle = localStorage.getItem('userName');
	const nameFb = localStorage.getItem('nameFb');

	const comments = useAppSelector(selectListComment);

	localStorage.setItem('comment', JSON.stringify(comments));

	return (
		<div>
			{userAvatar || imgFb ? (
				<div className="box__comment">
					{comments.map((comment: any, idx: number) => (
						<div key={idx} className="box__comment-main">
							<Avatar
								className="box__comment-main-img"
								alt="Remy Sharp"
								src={userAvatar || imgFb ? userAvatar || imgFb : ('' as any)}
							/>
							<div>
								<h4 className="box__comment-main-heading">{nameGoogle || nameFb}</h4>
								<p className="box__comment-main-desc">{comment}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div></div>
			)}
			<div className="detail-tab__comment">
				<DetailTabUser />
			</div>
		</div>
	);
}

export default DetailTabComment;
