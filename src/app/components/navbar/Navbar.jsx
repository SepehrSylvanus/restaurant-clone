"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  const [activeLink, setActive] = useState(null)
  const handleLink = e=>{
    setActive(e.target.pathanme)
  }
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/kokkariLogo.png'} alt='' fill/>
      </div>
    <div className={styles.navLinks}>
    <Link href={'/about'}>About</Link>
      <Link href={'/cuisine'}  onClick={handleLink}>Cuisine</Link>
      <Link href={'/menus'}  onClick={handleLink}>Menus</Link>
      <Link href={'/reservations'}  onClick={handleLink}>Reservations</Link>
      <Link href={'/private-dining'}  onClick={handleLink}>Private dining</Link>
    </div>
    </div>
  )
}

export default Navbar