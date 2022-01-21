import React from 'react'
import './FooterStyles.css'
import {
	FaFacebook,
	FaMailBulk,
	FaPhone,
	FaSearchLocation,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaSearchLocation
							size={20}
							style={{ color: 'white', marginRight: '2rem' }}
						/>
						<div>
							<p>123 StreetName St.</p>
							<h4>City, State</h4>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: 'white', marginRight: '2rem' }}
							/>
							123 456 7890
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: 'white', marginRight: '2rem' }}
							/>
							SendMeMoney@email.com
						</h4>
					</div>
				</div>
				<div className='right'>
					<h4>About the Company</h4>
					<p>This company is my way to make money</p>
					<div className='social'>
						<FaFacebook
							size={30}
							style={{ color: 'white', marginRight: '1rem' }}
						/>
						<FaTwitter
							size={30}
							style={{ color: 'white', marginRight: '1rem' }}
						/>
						<FaInstagram
							size={30}
							style={{ color: 'white', marginRight: '1rem' }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
