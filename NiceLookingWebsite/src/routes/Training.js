import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingComponent from '../components/TrainingComponent'

export default function Training() {
	return (
		<div>
			<Navbar />
			<HeroImage
				heading='Training'
				text='Best Training at Competitive Prices'
			/>
			<TrainingComponent />
			<Footer />
		</div>
	)
}
