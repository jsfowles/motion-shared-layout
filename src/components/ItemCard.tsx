import React from 'react';
import { Card, TextBox } from './styles';

const ItemCard = ({ item, selected, setSelected }) => {
	return (
		<Card
			whileHover={{ scale: 1.05, boxShadow: '5px 10px rgba(0,0,0,0.1)' }}
			key={item.id}
			layoutId={item.id}
			onClick={() => setSelected(item)}
		>
			<TextBox
				width={50}
				opacity={0.5}
				animate={{
					visibility: selected ? 'hidden' : 'visible'
				}}
			/>
			<TextBox
				width={150}
				opacity={0.7}
				animate={{
					visibility: selected ? 'hidden' : 'visible'
				}}
			/>

			<TextBox
				width={80}
				opacity={0.9}
				animate={{
					visibility: selected ? 'hidden' : 'visible'
				}}
			/>
		</Card>
	);
};

export default ItemCard;
