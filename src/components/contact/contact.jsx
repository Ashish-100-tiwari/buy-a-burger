import React from 'react'
import {motion}from "framer-motion";
import burger from "../../assets/burger2.png"
const contact = () => {
  return (
    <section className='contact'>
        <motion.form
        initial={{
          x:"-100vw",
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1,
        }}
        transition={{
          delay:0.4
        }}
        >
            <h2>Contact Us</h2>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>  
            <textarea placeholder='message...' cols="30"rows="10">

            </textarea>
            <button type='submit'>Send</button>
        </motion.form>


        <motion.div className='formBorder'
        initial={{x:"100vw",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{ delay:0.4}}
        >
            <motion.div
            initial={{y:"-100vh",x:"50%",opacity:0}}
            animate={{x:"50%",y:"-50%",opacity:1}}
            transition={{delay:0.8 }}
            > 
                <img src={burger }alt='burger'/>
            </motion.div>
        </motion.div>


    </section>
  )
}

export default contact