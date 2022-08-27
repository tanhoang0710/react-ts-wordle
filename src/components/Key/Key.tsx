import React from 'react';
import './Key.css';

interface IProps {
	letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
	return <div className="letter">{letter}</div>;
};

export default Key;
