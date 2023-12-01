"use client"
import styles from './press.module.css'
import Navbar from '../components/navbar/Navbar'

import Link from 'next/link'
import useSWR from 'swr';
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
const Press = () => {
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/press`,
    fetcher
  );
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.mainContainer}>
      {isLoading ? "Loading" : data?.map(item=>(
          <div className={styles.eachPress} key={item.id}>
          <div className={styles.imgContainer}>
           <img src={item.img} alt="" className={styles.img}/>
          </div>
          <div className={styles.textContainer}>
           <h3>{item.title}</h3>
           <p style={{fontWeight: 'bold', margin: '1.3em 0'}}>{item.subtitle}</p>
       
           <p>{item.desc}</p>
           <Link href={item.link}>Read more...</Link>
          </div>
         </div>
      ))}
       
        
      </div>
    </div>
  )
}

export default Press