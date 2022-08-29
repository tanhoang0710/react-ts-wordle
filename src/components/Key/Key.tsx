import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../interface';
import { incPos, setBoard } from '../../redux/boardSlice';
import './Key.css';

interface IProps {
	letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
	const board = useSelector((state: rootState) => state.board.board);
	const pos = useSelector((state: rootState) => state.board.pos);

	const dispatch = useDispatch();

	const chooseLetter = () => {
		if (pos >= 30) return;
		const newBoard = [...board];
		newBoard[pos] = letter;
		dispatch(setBoard(newBoard));
		dispatch(incPos());
	};

	return (
		<div className="letter" onClick={chooseLetter}>
			{letter}
		</div>
	);
};

export default Key;
