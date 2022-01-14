import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'

const Navbar = () => {
	return (
		<div classname='navbar'>
			<div className='container'>
				<h1>
					<span>
						<BsFillHouseFill />
						Real
					</span>
					Estate
				</h1>
				<button className='btn'>Sign In</button>
				<ul className='nav-menu'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Search</a>
					</li>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
