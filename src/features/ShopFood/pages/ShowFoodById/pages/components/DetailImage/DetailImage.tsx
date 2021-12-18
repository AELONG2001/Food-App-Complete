import { Food } from 'models/food';
import React from 'react';
import { SideBySideMagnifier } from 'react-image-magnifiers';
import './styles.scss';

export interface DetailImageProps {
	id?: string;
	listFood: Food[];
}

export default function DetailImage({ id, listFood }: DetailImageProps) {
	return (
		<div className="detail__img-box">
			{listFood.map((food, idx) => (
				<div key={idx} className="detail__img-box-content">
					{food.id === id && (
						<SideBySideMagnifier
							imageSrc={food.img}
							imageAlt={food.name}
							alwaysInPlace={true}
							transitionSpeedInPlace={0.3}
						/>
					)}
				</div>
			))}
		</div>
	);
}
