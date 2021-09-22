import React from 'react';
import Creations from './components/Creations';
import Footer from './components/Footer';
import Header from './components/Header';
import Middle from './components/Middle';


export const App = () => {
	return (
		<div>
			<Header />
			<Middle />
			<Creations />
			<Footer />
		</div>
	)
}

export default App