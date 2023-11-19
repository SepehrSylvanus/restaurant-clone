import React from "react";
import Navbar from "../components/navbar/Navbar";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
import './aboutGlobal.css'
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Philoxenia — φιλοξενια</h1>
        <div className={styles.aboutHotel}>
          <div className={styles.textContainer}>
            <hr />
            <hr />

            <p>
              At Kokkari Estiatorio, we are driven by the concept of philoxenia,
              the art of making a stranger a friend. This philosophy drives our
              efforts to create a cuisine fit for the gods with the hospitality
              of a proper Greek home — a restaurant that you would never want to
              leave.
            </p>

            <p>
              Named after a small fishing village on the island of Samos in the
              Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia
              Estiatorio in Palo Alto, California.
            </p>

            <p>
              Legendary Kokkari is the site where Orion, son of the Greek god
              Poseidon, fell in love with the daughter of the King of Chios. For
              her love, Orion foraged the island for wild game and seafood to
              prepare elaborate banquets: Cuisine fit for the gods.
            </p>

            <p>
              On entering Kokkari, guests experience the old-world charm of a
              rustic Mediterranean country inn. An inviting fireplace, extensive
              woodwork, hand-made pottery and freshly picked flowers all reflect
              the warmth and tradition of ages-old hospitality.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"/table.jpg"} fill className={styles.img} />
          </div>
        </div>
        <div className={styles.divider}>
          <hr />
          <hr />
        </div>
        <div className={styles.aboutSeo}>
          <div className={styles.hotelNamesAndAddress}>
            <div className={styles.address}>
              <h3 style={{marginBottom: '1em'}}>KOKKARI ESTIATORIO</h3>
              <p style={{marginBottom: '1em', fontWeight: 'bold'}}>
                200 Jackson Street (at Front St.)
                <br />
                San Francisco, CA 94111
              </p>
              <p>
                p: <Link href={'tel:+14159810983'} style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 16, fontWeight: 'bold'}} className={styles.roleLinks}>415.981.0983</Link>
                <br />
              </p>
              <Link href={'/reservations'} style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 16, fontWeight: 'bold'}} className={styles.roleLinks}>reservations & hours</Link>
              <Link href={'http://maps.apple.com/?daddr=200+Jackson+Street,+ San+Francisco,+CA'} style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 16, fontWeight: 'bold', display: 'block'}} className={styles.roleLinks}>directions via mobile map</Link>
            </div>
            <div className={styles.roles}>
              <p>Managing Partner</p>
              <Link href={'mailto:paul@kokkari.com'} className={styles.rolaNameLinks}>Paul Kirby</Link>
              <p>Chef Partner </p>
              <Link href={'mailto:erik@kokkari.com'} className={styles.rolaNameLinks}>Erik Cosselmon</Link>
              <p>General Manager </p>
              <Link href={'mailto:william@kokkari.com'} className={styles.rolaNameLinks}>William Boumier</Link>
              <p>Executive Chef </p>
              <p>Mario Ortega</p>
              <p>Chef de Cuisine </p>
              <p>Manuel Vera</p>
              <p>Office Manager </p>
              <p>Molly Barrango</p>
              <p>Sous Chefs </p>
              <p> Miho Reis</p>
              <p>Pastry</p>
              <p>Guillermo Coronado</p>
              <p>Managers</p>
              <p>
                Bibi Bahador
                <br />
                Iain Bates
                <br />
                Michele DiRuocco
                <br />
                Robin Kirby
                <br />
                Valerie Klein
              </p>
              <p>Wine Buyer </p>
              <p>Lyle Coffield</p>
              <p>Event Manager </p>
              <p>Melissa Lopez</p>
            </div>
          </div>
          <div className={styles.aboutEachOne}>
            <div className={styles.eachRole}>
              <div className={styles.paulImgContainer}>
              <Image src={'/paul.jpg'} width={300} height={449} className={styles.img}/>
              </div>
              <Link href={'mailto:paul@kokkari.com'} className={styles.roleLinks}><h4 style={{marginBottom: '1em'}}>Paul kirby</h4></Link>
              <h5 style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 16, fontWeight: 'normal'}}>Managing partner</h5>
              <p style={{margin: '1em 0'}}>
                “Running a restaurant is all about taking care of people,” says
                Paul Kirby who has been at the helm of Kokkari Estiatorio since
                2000. “From your staff to each and every guest that comes into
                your establishment, it is important to make everyone feel
                comfortable and welcome. Restaurant employees that are valued
                and respected take pride in their work and truly enjoy their
                jobs. This translates directly to the guest experience.”
              </p>
              <p style={{margin: '1em 0'}}>
                While Paul may be soft-spoken and charming (qualities he
                attributes to his Southern upbringing), he is extremely driven.
                His dedicated, hands-on approach to management ensures the high
                standards of service and hospitality at the restaurant have
                stayed consistent for over 15 years. Under Kirby, Kokkari’s
                refreshing approach to service emphasizes the emotional elements
                of hospitality: Have a good time and above all, make sure the
                guests have a great time.
              </p>
              <p style={{margin: '1em 0'}}>
                Paul came to the West Coast after years managing waterfront
                restaurant properties in The Hamptons outside of New York City.
                His first job in San Francisco was working alongside acclaimed,
                Bay Area Chef, Reed Hearon as General Manager of Rose Pistola.
                After three years with Hearon he came to Kokkari Estiatorio
                bringing with him a genuine appreciation and knowledge of rustic
                Meditteranean cuisine and wines, an essential prerequisite for
                working at Kokkari. In 2006 he was named Managing Partner of
                both Kokkari and Evvia in Palo Alto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
