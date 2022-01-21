import React from 'react'
import { Link } from 'react-router-dom'
import './PriceCardStyles.css'

export default function PriceCard() {
	return (
		<div className='pricing'>
			<div className='card-container'>
				<div className='card'>
					<h3>Basic</h3>
					<span className='bar'></span>
					<p className='btc'>1 BTC</p>
					<p>- 3 Days -</p>
					<p>- Views -</p>
					<p>- Private Quarters -</p>
					<p>- Pool Access -</p>
					<Link to='/contact' className='btn'>
						Book
					</Link>
				</div>
				<div className='card'>
					<h3>Executive</h3>
					<span className='bar'></span>
					<p className='btc'>2 BTC</p>
					<p>- 6 Days -</p>
					<p>- Views -</p>
					<p>- Private Quarters -</p>
					<p>- Private Pool -</p>
					<Link to='/contact' className='btn'>
						Book
					</Link>
				</div>
				<div className='card'>
					<h3>VIP</h3>
					<span className='bar'></span>
					<p className='btc'>3 BTC</p>
					<p>- 9 Days -</p>
					<p>- Views -</p>
					<p>- Private Quarters -</p>
					<p>- Private Party Pool -</p>
					<Link to='/contact' className='btn'>
						Book
					</Link>
				</div>
			</div>
		</div>
	)
}
