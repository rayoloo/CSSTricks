import React from 'react'
import './HeroImageStyles.css'

export default function HeroImage(props) {
	return (
		<div className='hero-image'>
			<div className='heading'>
				<h1>{props.heading}</h1>
				<p>{props.text}</p>
			</div>
		</div>
	)
}
