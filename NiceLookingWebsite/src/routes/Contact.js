import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

export default function Contact() {
	return (
		<div>
			<Navbar />
			<HeroImage heading='Contact Us' text='Leave us a message' />
			<Form />
			<Footer />
		</div>
	)
}
