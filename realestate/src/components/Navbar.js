import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
	const [menuShow, setMenuShow] = useState(false)
	const handleHamburger = () => setMenuShow(!menuShow)

	return (
		<div className='navbar'>
			<div className='container'>
				<h1>
					<span>
						<BsFillHouseFill />
						Real
					</span>
					Estate
				</h1>
				<button className='btn'>Sign In</button>
				<ul className={menuShow ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Search</a>
					</li>
					<li>
						<a href='/'>About Us</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</ul>
				<div className='hamburger' onClick={handleHamburger}>
					{menuShow ? (
						<FaRegTimesCircle className='icon' />
					) : (
						<HiOutlineMenuAlt4 className='icon' />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
