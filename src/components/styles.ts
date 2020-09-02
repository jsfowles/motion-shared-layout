import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
	display: grid;
	grid-template-columns: 200px 200px;
	grid-row: auto auto;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
`;

export const Overlay = styled(motion.div)`
	position: fixed;
	z-index: 100;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: grid;
	background-color: black;
	place-content: center;
`;

export const Card = styled(motion.div)`
	background: hotpink;
	width: ${(props) => (props.selected ? `280px` : 'initial')};
	padding: ${(props) => (props.selected ? '32px' : '16px')};
	border-radius: 24px;
`;

export const TextBox = styled(motion.div)`
	margin: 8px 0;
	width: ${(props) => (props.width ? `${props.width}px` : '0%')};
	opacity: ${(props) => (props.opacity ? props.opacity : 1)};
	height: 18px;
	border-radius: 6px;
	background-color: #7b2ff7;
`;
