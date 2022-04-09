import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={styles.nav}>
            <div >
				<Link to="/register">Register</Link>
			</div>
        <div >
				<Link to="/Login">Login</Link>
			</div>
			<div >
				<Link to="/Home">Home</Link>
			</div>
			<div >
				<Link to="/Employees">Employees</Link>
			</div>
		</div>
  )
}
