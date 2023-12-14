'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@css/about.module.css'
import { FiMapPin, FiMinus, FiPlus } from 'react-icons/fi'
import Image from 'next/image'
import Section from './Section'
import * as data from './data'
import mapboxgl from 'mapbox-gl'
import { rgbDataURL } from '../MDX'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN

// Not my actual location, obviously
const center: mapboxgl.LngLatLike = [-96.438055, 32.782434]

const About: FC = () => (
  <div className={styles.box}>
    <div className={styles.container}>
      
    </div>
    <Section content={data.about} id='about'>
      <h2 className={styles.title}>About</h2>
    </Section>

    <Section
      content={data.work}
      extend={{
        title: 'All Works',
        href: 'https://github.com/Mordaax',
        newTab: true,
      }}
      id='works'
    >
      <h2 className={styles.title}>Select Work</h2>
    </Section>

    {/* <Map /> */}
    
      <h1 className={styles.title}>Education</h1>
      <div>
        <div className={styles.educationCard}>
        <div style={{'padding':'10px'}}>
        
          <div className={styles.educationCardHeader}>
          <Image
          src='/photos/ngee-ann-polytechnic.png'
          alt='Ngee Ann Polytechnic Logo'
          width={85}
          height={85}
          draggable={false}
          placeholder='blur'
          blurDataURL={rgbDataURL(156, 188, 201)}
          style={{'boxShadow': '5px rgba(255, 255, 255, 1)', 'borderRadius':'10px'}}
          priority/>   
          <div style={{'marginLeft':'10px'}}>
          
          <h1>Ngee Ann Polytechnic</h1>
          <h2>Diploma in Cybersecurity and Digital Forensics</h2>
          <p>2021 - 2024</p>
          <p>GPA: 3.96 (15 Distinctions)</p>
          </div>
          
          </div>
          
          <br/>
          <p>
          • Ngee Ann Polytechnic Scholarship
            <br/>
          • Most oustanding performance (April 2022)
          <br/>
          • Directors List (2021 - 2022)
          <br/>
          • Certificate in Advanced Computing Mathamatics 
          <br/>
          • The Christeria Programme: Took part in the Youth Exploration Program, Temasek Foundation Scale Program, and TCP Camp, which provided me with a wide-ranging and diverse set of experiences, and also facilitated the development of crucial life skills such as effective time management and networking.
          <br/>
          <br/>
          Other Activities: Overflow, Nullsec, Orion Student Interest Group, Chess Club
          <br/>
          <br/>
          Awards
          <br/>
          • AISP Student Volunteer Recognition Programme Silver 2022-2023
          <br/>
          • Govware Singapore Youth Cyber Conquest, DSTA Cyber Discovery Camp 2021-2023 (~Top 10)
          
          </p>
          </div>
      </div>
        
      </div>
      <div>
        <div className={styles.educationCard}>
        <div style={{'padding':'10px'}}>
          
          <div className={styles.educationCardHeader}>
          <Image
          src='/photos/nchs.jpg'
          alt='Ngee Ann Polytechnic Logo'
          width={85}
          height={85}
          draggable={false}
          placeholder='blur'
          blurDataURL={rgbDataURL(156, 188, 201)}
          style={{'boxShadow': '5px rgba(255, 255, 255, 1)', 'borderRadius':'10px'}}
          priority/>  
          <div style={{'marginLeft':'10px'}}>
          <h1>Nan Chiau High School</h1>
          <h2>O Levels</h2>
          <p>2017 - 2020</p>
          <p>L1R5 Aggregate: 7</p>
          </div>
          </div>
          
          <br/>
          <p>
          • Infocomm Club: Learned different technologies such as gamemaker, javascript and took part in several competitions

            <br/>
          • Sports Leader
          <br/>
          <br/>
          Awards
          <br/>
          • CITI YMCA Youth For Causes Distinction award 2020
          <br/>
          • Singapore Junior Physics Olympiad Bronze 2020
        
          </p>
          </div>
      </div>
        
      </div>
      

    




      <h1 className={styles.title}>Experiences</h1>
      <div>
        <div className={styles.educationCard}>
        <div style={{'padding':'10px'}}>
        
          <div className={styles.educationCardHeader}>
           
          <div style={{}}>
          
          <h1>Cyber Defence Intern</h1>
          <h2>KPMG Singapore</h2>
          <p></p>
          <p>September 2023 - January 2024</p>
          </div>
          
          
          </div>
          <p>• Conducted vulnerability assessment and picked up different skills such as Network, Web VAPT</p>
          </div>
      </div>
        
      </div>
      <div>
        <div className={styles.educationCard}>
        <div style={{'padding':'10px'}}>
          
          <div className={styles.educationCardHeader}>
          <Image
          src='/photos/overflow2.png'
          alt='Ngee Ann Polytechnic Logo'
          width={85}
          height={85}
          draggable={false}
          placeholder='blur'
          blurDataURL={rgbDataURL(156, 188, 201)}
          style={{'boxShadow': '5px rgba(255, 255, 255, 1)', 'borderRadius':'10px'}}
          priority/>  
          <div style={{'marginLeft':'10px'}}>
          <h1>Secretary/ Student Advisor</h1>
          <h2>Overflow Student Interest Group</h2>
          <p>Feb 2022 - Feb 2023</p>
          </div>
          </div>
          
          <br/>
          <p>
          • Led the planning and execution of school wide events such as Bytehackz Hackathon, SIG Fiesta  \n- 
          <br/>
          • Conducted workshops on Vuejs, Design Patterns, Computer Vision
          <br/>
          • Planned and assisted with events such Open House, PolyITE Informatics Olympiad
          <br/>
          • In charge of club's administrative matters and record keeping
          <br/>

          </p>
          </div>
      </div>
        
      </div>


      <div>
        <div className={styles.educationCard}>
        <div style={{'padding':'10px'}}>
          
          <div className={styles.educationCardHeader}>
          <Image
          src='/photos/nullsec.png'
          alt='Ngee Ann Polytechnic Logo'
          width={85}
          height={85}
          draggable={false}
          placeholder='blur'
          blurDataURL={rgbDataURL(156, 188, 201)}
          style={{'boxShadow': '5px rgba(255, 255, 255, 1)', 'borderRadius':'10px'}}
          priority/>  
          <div style={{'marginLeft':'10px'}}>
          <h1>Technology Lead</h1>
          <h2>Nullsec Student Interest Group</h2>
          <p>Sep 2021 - Feb 2023</p>
          </div>
          </div>
          
          <br/>
          <p>
          • Conducted cybersecurity workshops on Network Forensics and Linux, fufilled the clubs technological requirements such as web development and phishing demonstrations
          <br/>
          • Helped to run events, create CTF questions for events such as Interpoly Lag and Crash, Youth Cyber Exploration Programme and CTF Month. 
          </p>
          </div>
      </div>
        
      </div>
    
    
  </div>
)

const Map: FC = () => {
  const [zoom, setZoom] = useState(11)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)

  useEffect(
    () =>
      setMap(
        new mapboxgl.Map({
          container: 'mapbox',
          style: 'mapbox://styles/Mordaax/clf6is4qj000501mn4j04t7l3',
          center: center,
          zoom: 11,
        })
      ),
    []
  )

  return (
    <section className={styles.section} id='where'>
      <h2>Where</h2>
      <div className={styles.map_container}>
        <div className={styles.map}>
          <div className={styles.graphics}>
            <Image
              src='/photos/cloud.png'
              alt='cloud'
              width={390}
              height={347}
              className={styles.cloud}
            />
            <Image
              src='/photos/plane.png'
              alt='plane'
              width={24}
              height={56}
              className={styles.plane}
            />
            <Image
              src='/photos/plane-shadow.png'
              alt='plane shadow'
              width={24}
              height={24}
              className={styles.plane_shadow}
            />
          </div>
          <div className={styles.marker} aria-label='map marker'>
            <div>
              <div className={styles.shadow} />
              <div className={styles.dot}>
                <div />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <motion.button
              onClick={() => {
                map?.flyTo({ zoom: zoom === 11 ? 7 : 4 })
                setZoom((z) => z - 4)
              }}
              aria-label='zoom out'
              initial={{ scale: 0 }}
              animate={{ scale: zoom === 3 ? 0 : 1 }}
            >
              <FiMinus />
            </motion.button>
            <motion.button
              onClick={() => {
                map?.flyTo({ zoom: zoom === 7 ? 11 : 7 })
                setZoom((z) => z + 4)
              }}
              aria-label='zoom in'
              initial={{ scale: 0 }}
              animate={{ scale: zoom === 11 ? 0 : 1 }}
            >
              <FiPlus />
            </motion.button>
          </div>
          <div id='mapbox' className='light' />
        </div>
        <p className={styles.town}>
          <FiMapPin />
          <a
            href='https://en.wikipedia.org/wiki/Forney,_Texas'
            target='_blank'
            rel='noreferrer'
          >
            Forney, Texas
          </a>
        </p>
      </div>
    </section>
  )
}

export default About
