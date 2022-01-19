import React from 'react'
import './Featured.css'

import House1 from '../assets/house1.jpg'
import Bed1 from '../assets/bed1.jpg'
import Bed2 from '../assets/bed2.jpg'
import Kitchen from '../assets/kitchen.jpg'
import Bathroom from '../assets/bath1.jpg'

import House2 from '../assets/house2.jpg'
import Bed3 from '../assets/bed3.jpg'
import Bed4 from '../assets/bed4.jpg'
import Bathroom2 from '../assets/bath2.jpg'
import Livingroom from '../assets/living-room.jpg'

const Featured = () => {
	return (
		<div className='featured'>
			<h1 className='featured-text'>Top Featured Listings</h1>
			<p className='featured-text'>
				Selected listing by City, State, & Zip based on views.
			</p>
			<div className='container'>
				<img className='span-3 image-grid-row-2' src={House1} alt='' />
				<img src={Bed1} alt='' />
				<img src={Bed2} alt='' />
				<img src={Kitchen} alt='' />
				<img src={Bathroom} alt='' />
				<div className='span-3 img-details'>
					<div className='top'>
						<h2> 123 Acme St. Dallas, TX</h2>
						<p>For Sale</p>
						<p className='price'>$2,677,999</p>
					</div>
					<div className=' info-grid'>
						<div className='info'>
							<p className='bold'>Bedrooms: </p>
							<p>5</p>
						</div>
						<div className='info'>
							<p className='bold'>Bathrooms: </p>
							<p>7</p>
						</div>
						<div className='info'>
							<p className='bold'>Square Feet: </p>
							<p>8,358</p>
						</div>
						<div className='info'>
							<p className='bold'>Est. Payment: </p>
							<p>14,797/mo</p>
						</div>
					</div>
				</div>
				<div className='span-2 right-img-details'>
					<p>
						A beautiful modern day home in the city with a full-sized pool.
						Spacious and luxurious home located in Texas. Including media room,
						work out facility and built-in sauna.
					</p>
					<button className='btn'>View Listing</button>
				</div>
			</div>
			{/* Second Section */}
			<div className='container'>
				<img className='order-2' src={Bed3} alt='' />
				<img className='order-3' src={Bed4} alt='' />
				<img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />
				<img className='order-4' src={Livingroom} alt='' />
				<img className='order-5' src={Bathroom2} alt='' />
				<div className='span-2 right-img-details  order-7'>
					<p>
						A beautiful modern mansion in the Texan mountains with a full-sized
						outdoor pool and large backyard barbeque party space.Including
						theatre room, gaming arcade and indoor pool and spa with a built-in
						sauna.
					</p>
					<button className='btn'>View Listing</button>
				</div>

				<div className='span-3 img-details order-6'>
					<div className='top'>
						<h2> 1663 Acme St. Dallas, TX</h2>
						<p>For Sale</p>
						<p className='price'>$4,307,333</p>
					</div>
					<div className=' info-grid'>
						<div className='info'>
							<p className='bold'>Bedrooms: </p>
							<p>9</p>
						</div>
						<div className='info'>
							<p className='bold'>Bathrooms: </p>
							<p>10</p>
						</div>
						<div className='info'>
							<p className='bold'>Square Feet: </p>
							<p>14,772</p>
						</div>
						<div className='info'>
							<p className='bold'>Est. Payment: </p>
							<p>26,887/mo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured
