import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
	return (
		<div className='subscribe'>
			<div className='content'>
				<h2>Join Our DeFi Community</h2>
				<form
					action='https://getform.io/f/7413aff2-b3a5-4c85-9baa-23ca7775585e'
					method='POST'>
					<div className='form-container display-col'>
						<input type='email' name='email' placeholder='Enter your email' />
						<button className='btn'>Sign Up</button>
					</div>
					<div className='form-container'>
						<input type='checkbox' />
						<p>Yes, I agree to receive email communication from DeFi</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Subscribe
