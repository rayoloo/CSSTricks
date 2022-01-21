import React from 'react'
import { Link } from 'react-router-dom'
import pod from '../assets/pod.jpg'
import moon from '../assets/moon.jpg'
import './TrainingStyles.css'

const TrainingComponent = () => {
	return (
		<div className='training'>
			<div className='left'>
				<h1>Training</h1>
				<p>
					Thorough training is a necessity for when training to space. We offer
					all inclusive training for pre-flight and in-flight scenarios. world
					class training is possible with our highly experienced astronauts who
					trained at NASA and went to the Sun.
				</p>
				<Link to='/contact'>
					<button className='btn'>Contact</button>
				</Link>
			</div>
			<div className='right'>
				<div className='image-container'>
					<div className='image-stack top'>
						<img src={moon} className='image' alt='moon' />
					</div>
					<div className='image-stack bottom'>
						<img src={pod} className='image' alt='moon pod' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TrainingComponent
