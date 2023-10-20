import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import heart from '../../assets/Heart.png';
import image from '../../assets/image.png';
import imageback from '../../assets/image-back.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion/dist/framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

    const transition= {type: 'spring', duration: 3}

    const mobile = window.innerWidth<=768 ? true : false;
    return (
    <div className='hero'>
    <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
          {/* the best ad */}
            <div className='the-best-ad'>
            <motion.div
                initial={{left: mobile? '165px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span><span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                
                <div>
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>
            </div>

            {/* figures */}

            <div className='figures'>
                <div>
                    <span><NumberCounter end={140} start={100} delay="4" preFix="+" /> </span>
                    <span>expert coachs</span>
                </div>
                <div>
                <span><NumberCounter end={978} start={800} delay="4" preFix="+" /> </span>
                    <span>members joined</span>
                </div>
                <div>
                <span><NumberCounter end={50} start={10} delay="4" preFix="+" /> </span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/*hero buttons */}

            <div className="hero-buttons">
               <button className='btn'>Get started</button>
               <button className="btn">Learn more</button>
            </div>
            </div>


        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{right: "-1rem"}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart rate</span><span>116 bpm</span>
            </motion.div>
            
            {/* hero image */}

            <img src={image} alt="" className='hero-image'/>
            <motion.img 
            initial={{right: "11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition}
            src={imageback} alt="" className='hero-image-back'/>

            <motion.div 
            initial={{right: "28rem"}}
            whileInView={{right: "38rem"}}
            transition={transition}
            className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories burned</span><span>220 kcal</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero