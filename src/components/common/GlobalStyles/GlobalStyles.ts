import './GlobalStyles.scss';

interface ChildrenProps extends React.HTMLAttributes<Element> {
	children: JSX.Element;
}

function GlobalStyles({ children }: ChildrenProps) {
	return children;
}

export default GlobalStyles;
