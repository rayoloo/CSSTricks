import React from 'react'
import './FormStyles.css'

export default function Form() {
	return (
		<div className='form'>
			<form>
				<label>Name</label>
				<input type='text'></input>
				<label>Email</label>
				<input type='email'></input>
				<label>Message</label>
				<textarea rows='6' placeholder='Type a short message here' />
				<button className='btn'>Submit</button>
			</form>
		</div>
	)
}
