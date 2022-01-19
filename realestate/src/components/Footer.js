import React from 'react'
import './Footer.css'

import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='social'>
				<FaFacebook className='icon' />
				<FaInstagram className='icon' />
				<FaTwitter className='icon' />
				<FaDiscord className='icon' />
			</div>
			<div className='container'>
				<div className='col'>
					<h3>About Us</h3>
					<p>Company</p>
					<p>Careers</p>
					<p>Planning</p>
				</div>
				<div className='col'>
					<h3>Listing</h3>
					<p>Houses</p>
					<p>Mansion</p>
					<p>Renting</p>
					<p>Screening</p>
				</div>
				<div className='col'>
					<h3>Legal</h3>
					<p>Policies</p>
					<p>Press Releases</p>
				</div>
				<div className='col'>
					<h3>Buyers</h3>
					<p>Mortgage with Us</p>
					<p>Pricing</p>
					<p>Sublease</p>
				</div>
			</div>
		</div>
	)
}
export default Footer
