import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import PriceCard from '../components/PriceCard'
const Pricing = () => {
	return (
		<div>
			<Navbar />
			<HeroImage heading='Pricing' text='Choose your accommodation ' />
			<PriceCard />
			<Footer />
		</div>
	)
}

export default Pricing
