import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './routes/Contact'

import HomePage from './routes/HomePage'
import Pricing from './routes/Pricing'
import Training from './routes/Training'

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/pricing' element={<Pricing />} />
			<Route path='/training' element={<Training />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)
}

export default App
