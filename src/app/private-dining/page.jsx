import React from "react";
import styles from "./private-dining.module.css";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
const PrivateDining = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Private Dining and Special Events</h1>
        <div className={styles.eachTable}>
          <h3>Chef’s Table</h3>
          <div className={styles.eachTableContents}>
            <div className={styles.textContainer}>
              <hr className={styles.bigDivider} />
              <hr
                className={styles.bigDivider}
                style={{ marginBottom: "5px" }}
              />

              <p>
                The focal point of the Kouzina is the Chef’s Table. It is a
                beautiful 20 foot long hand-carved wooden table that can
                accommodate up to 20 people. This space is ideal for
                celebrations, special family events and casual business
                functions that do not require a completely private space.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={"/chef-table.jpg"}
                alt=""
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.diningInformation}>
          <h2>Further Group Dining Information</h2>
          <p style={{marginBottom: '1.5em'}}>
            For group dining options, room minimums and availability, please
            contact our Event Manager, <Link href={'mailto:events@kokkari.com'}>Melissa Lopez</Link>.
          </p>
          <p>Phone: <Link href={'tel:+14159810983'}>415.981.0983</Link></p>
          <Link href={'mailto:events@kokkari.com'} style={{marginBottom: '1.5em'}}>Email: events@kokkari.com</Link>
          <p >Download: <Link href={'#'}>Private Dining Packet</Link> or <Link href={'#'}>Lunch Event Packet</Link></p>
        </div>
      </div>
    </div>
  );
};

export default PrivateDining;
