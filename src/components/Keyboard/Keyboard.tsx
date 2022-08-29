import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../interface';
import { decPos, setBoard } from '../../redux/boardSlice';
import Key from '../Key/Key';
import './Keyboard.css';

const Keyboard: React.FC = () => {
	const rows: string[] = [
		'q w e r t y u i o p',
		'a s d f g h j k l',
		'z x c v b n m',
	];

	const dispatch = useDispatch();

	const board = useSelector((state: rootState) => state.board.board);
	const pos = useSelector((state: rootState) => state.board.pos);

	const clickBack = () => {
		if (pos <= 0) return;
		const newBoard = [...board];
		newBoard[pos - 1] = '';
		dispatch(decPos());
		dispatch(setBoard(newBoard));
	};

	return (
		<div className="keyboard-container">
			{rows.map((row, idx) => (
				<div className="row" key={idx}>
					{idx === 2 && <span className="letter-row">Enter</span>}
					{row.split(' ').map((letter, idx) => (
						<div className="letter-row">
							<Key letter={letter.toUpperCase()} key={idx} />
							{letter === 'm' && (
								<span onClick={clickBack}>Back</span>
							)}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Keyboard;
