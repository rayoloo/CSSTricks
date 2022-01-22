import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
	const [showMenu, SetShowMenu] = useState(false)

	const handleClick = () => SetShowMenu(!showMenu)

	return (
		<div className='navbar'>
			<div className='container'>
				<h1 style={{ marginLeft: '1rem', color: '#00d8ff' }}>Defi</h1>
				<ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<a href='/'>Platform</a>
					</li>
					<li className='nav-item'>
						<a href='/'>Developers</a>
					</li>
					<li className='nav-item'>
						<a href='/'>Community</a>
					</li>
					<li className='nav-item'>
						<a href='/'>About</a>
					</li>
					<li className='nav-item'>
						<a className='btn' href='/'>
							Use Defi
						</a>
					</li>
				</ul>
				<div className='hamburger' onClick={handleClick}>
					{showMenu ? (
						<AiOutlineClose className='icon' />
					) : (
						<AiOutlineMenu className='icon' />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
