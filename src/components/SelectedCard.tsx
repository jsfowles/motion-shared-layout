import React from 'react';
import { Card, TextBox } from './styles';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.25
		}
	}
};

const item = (width) => {
	return {
		hidden: { width: 0 },
		show: {
			boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
			width: width,
			transition: { duration: 0.75, type: 'tween' }
		}
	};
};

const SelectedCard = ({ selected }) => {
	return (
		<Card
			selected={selected}
			layoutId={selected.id}
			initial="hidden"
			animate="show"
			variants={container}
		>
			<TextBox variants={item(80)} opacity={0.5} />
			<TextBox variants={item(180)} opacity={0.6} />
			<TextBox variants={item(280)} opacity={0.7} />
			<TextBox variants={item(120)} opacity={0.8} />
			<TextBox variants={item(60)} opacity={0.9} />
		</Card>
	);
};

export default SelectedCard;
