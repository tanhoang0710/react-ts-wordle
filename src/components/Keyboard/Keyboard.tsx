import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../interface';
import { decPos, incRow, setBoard } from '../../redux/boardSlice';
import wordList from '../../words.json';
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
	const row = useSelector((state: rootState) => state.board.row);
	const correctWord = useSelector(
		(state: rootState) => state.board.correctWord
	);
	let board5Words: string = `${board[pos - 5]}${board[pos - 4]}${
		board[pos - 3]
	}${board[pos - 2]}${board[pos - 1]}`.toLowerCase();

	const clickBack = () => {
		if (Math.floor(pos - 1) / 5 < row) return;
		const newBoard = [...board];
		newBoard[pos - 1] = '';
		dispatch(decPos());
		dispatch(setBoard(newBoard));
	};

	const clickEnter = () => {
		if (!wordList.words.includes(board5Words)) {
			alert('Invalid word');
		}
		if (wordList.words.includes(board5Words)) {
			if (pos % 5 === 0 && pos !== 0) {
				dispatch(incRow());
			}
		}
		if (pos === 30 && wordList.words.includes(board5Words)) {
			alert('The word is: ' + correctWord);
		}
	};

	return (
		<div className="keyboard-container">
			{rows.map((row, idx) => (
				<div className="row" key={idx}>
					{idx === 2 && (
						<span className="letter-row" onClick={clickEnter}>
							Enter
						</span>
					)}
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
