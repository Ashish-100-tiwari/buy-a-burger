import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder';
import Menu from "./Menu";


const Home = () => {

  return (
  <>
  <section className='home'>
    <div>
      <motion.h1
      initial={{ x:"-100%", opacity:0, }}
      whileInView={{ x:"0%",opacity:1 }}
      >Buy a Burger</motion.h1>
      <motion.p

      initial={{ x:"-100%", opacity:0, }}
      whileInView={{ x:"0%",opacity:1 }}
      transition={ {delay:0.2}}
      
      >Made with Love....</motion.p>

    </div>
    <motion.a href="#menu"
    initial={{ y:"-100%", opacity:0,}}
    whileInView={{y:0,opacity:1}}
    transition={{delay: 0.4}}
    >
      Explore Menu
    </motion.a>
  </section>
  <Founder/>
  <Menu/>
  </>
  
  );
}

export default Home