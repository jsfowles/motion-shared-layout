import React, { useState } from 'react';
import SelectedCard from './SelectedCard';
import ItemCard from './ItemCard';
import { Container, Overlay, Card } from './styles';
import { items } from './data';
import '../identity/styles.css';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const App = () => {
	const [selected, setSelected] = useState(null);
	console.log(selected);
	return (
		<AnimateSharedLayout type="crossfade">
			<AnimatePresence>
				{selected && (
					<Overlay
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelected(null)}
					>
						<SelectedCard selected={selected} layoutId={selected.id} />
					</Overlay>
				)}
			</AnimatePresence>
			<Container>
				{items.map((item) => (
					<ItemCard
						item={item}
						selected={selected}
						layoutId={item.id}
						setSelected={setSelected}
					/>
				))}
			</Container>
		</AnimateSharedLayout>
	);
};

export default App;
