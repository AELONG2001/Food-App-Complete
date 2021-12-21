import ButtonScroll from 'components/common/ButtonScroll/ButtonScroll';
import React from 'react';
import Navbar from './pages/Navbar';

export default function Header() {
	return (
		<div>
			<Navbar />
			<ButtonScroll />
		</div>
	);
}
