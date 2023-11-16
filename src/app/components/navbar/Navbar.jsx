import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link>About</Link>
      <Link>Cuisine</Link>
      <Link>Menus</Link>
      <Link>Reservations</Link>
      <Link>Private dining</Link>
    </div>
  )
}

export default Navbar