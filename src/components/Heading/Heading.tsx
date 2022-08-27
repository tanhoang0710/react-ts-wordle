import React from 'react';
import './Heading.css';

interface IProps {
	text: string;
	type: string;
}

const Heading: React.FC<IProps> = ({ text, type }) => {
	return <p className={`heading-${type}`}>{text}</p>;
};

export default Heading;
