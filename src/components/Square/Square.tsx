import React, { useEffect, useState } from 'react';
import './Square.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { rootState } from '../../interface';

interface IProps {
	val: string;
	squareIdx: number;
}

const Square: React.FC<IProps> = ({ val, squareIdx }) => {
	const correctWord = useSelector(
		(state: rootState) => state.board.correctWord
	);
	const pos = useSelector((state: rootState) => state.board.pos);
	const reduxRow = useSelector((state: rootState) => state.board.row);

	const [correct, setCorrect] = useState<boolean>(false);
	const [almost, setAlmost] = useState<boolean>(false);
	const [wrong, setWrong] = useState<boolean>(false);

	let wordLastIdx = 4;
	let currnentPos =
		pos === 5
			? wordLastIdx
			: pos > 5 && pos % 5 === 0
			? wordLastIdx
			: (pos % 5) - 1;

	const variants = {
		filled: () => ({
			scale: [1.2, 1],
			transition: {
				duration: 0.2,
			},
		}),
		unfilled: () => ({
			scale: [1.2, 1],
			transition: {
				duration: 0.2,
			},
		}),
	};

	useEffect(() => {
		console.log(
			'🚀 ~ file: Square.tsx ~ line 25 ~ currnentPos',
			currnentPos
		);
		if (correctWord[currnentPos] === val) setCorrect(true);
		else if (!correct && val !== '' && correctWord.includes(val)) {
			setAlmost(true);
		} else if (!correct && val !== '' && !correctWord.includes(val)) {
			setWrong(true);
		}

		return () => {
			setCorrect(false);
			setAlmost(false);
			setWrong(false);
		};
	}, [val]);

	const status: any =
		Math.floor(squareIdx / 5) < reduxRow &&
		(correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '');

	return (
		<motion.div animate={val ? 'filled' : 'unfilled'} variants={variants}>
			<div className="square" id={status}>
				{val}
			</div>
		</motion.div>
	);
};

export default Square;
