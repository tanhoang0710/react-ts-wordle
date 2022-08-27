import React from 'react';
import './Square.css';

interface IProps {
	val: string;
	squareIdx: number;
}

const Square: React.FC<IProps> = ({ val, squareIdx }) => {
	return (
		<>
			<div className="square">{val}</div>
		</>
	);
};

export default Square;
