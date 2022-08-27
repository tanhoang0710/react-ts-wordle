import React from 'react';
import './Board.css';
import Square from '../Square/Square';
import Keyboard from '../Keyboard/Keyboard';

interface IProps {
	board: string[];
}

const Board: React.FC<IProps> = ({ board }) => {
	return (
		<>
			<div className="board">
				{board.map((square, idx) => (
					<>
						<Square val={square} squareIdx={idx} />
					</>
				))}
			</div>
			<div className="keyboard">
				<Keyboard />
			</div>
		</>
	);
};

export default Board;
