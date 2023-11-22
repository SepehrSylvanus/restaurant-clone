import React from 'react'
import styles from './press.module.css'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Press = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.mainContainer}>
        <div className={styles.eachPress}>
         <div className={styles.imgContainer}>
          <img src="/advisor.jpg" alt="" className={styles.img}/>
         </div>
         <div className={styles.textContainer}>
          <h3>Trip Advisor: Best Fine Dining Restaurants — United States</h3>
          <p>Trip Advisor Travelers’ Choice Awards – Fine Dining, 2015</p>
          <p>“Best Greek food anywhere – including Greece…”</p>
          <Link href={'#'}>Read more...</Link>
         </div>
        </div>
        <div className={styles.eachPress}>
         <div className={styles.imgContainer}>
          <img src="/glass-table.jpg" alt="" className={styles.img}/>
         </div>
         <div className={styles.textContainer}>
          <h3>Trip Advisor: Best Fine Dining Restaurants — United States</h3>
          <p>Trip Advisor Travelers’ Choice Awards – Fine Dining, 2015</p>
          <p>“Best Greek food anywhere – including Greece…”</p>
          <Link href={'#'}>Read more...</Link>
         </div>
        </div>
        <div className={styles.eachPress}>
         <div className={styles.imgContainer}>
          <img src="/advisor.jpg" alt="" className={styles.img}/>
         </div>
         <div className={styles.textContainer}>
          <h3>Trip Advisor: Best Fine Dining Restaurants — United States</h3>
          <p>Trip Advisor Travelers’ Choice Awards – Fine Dining, 2015</p>
          <p>“Best Greek food anywhere – including Greece…”</p>
          <Link href={'#'}>Read more...</Link>
         </div>
        </div>
        <div className={styles.eachPress}>
         <div className={styles.imgContainer}>
          <img src="/advisor.jpg" alt="" className={styles.img}/>
         </div>
         <div className={styles.textContainer}>
          <h3>Trip Advisor: Best Fine Dining Restaurants — United States</h3>
          <p>Trip Advisor Travelers’ Choice Awards – Fine Dining, 2015</p>
          <p>“Best Greek food anywhere – including Greece…”</p>
          <Link href={'#'}>Read more...</Link>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Press