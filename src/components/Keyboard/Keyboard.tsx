import React from 'react';
import Key from '../Key/Key';

const Keyboard: React.FC = () => {
	const rows: string[] = [
		'q w e r t y u i o p',
		'a s d f g h j k l',
		'z x c v b n m',
	];

	return (
		<div className="keyboard-container">
			{rows.map((row, idx) => (
				<div className="row">
					<Key letter={row} />
				</div>
			))}
		</div>
	);
};

export default Keyboard;
