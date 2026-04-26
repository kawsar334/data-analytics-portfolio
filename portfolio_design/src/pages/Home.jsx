

import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import About from '../components/about/About'
import Marquee from '../components/marque/Marquee'
import LinkBar from '../components/LinkBar'
import Education from '../components/Education'
import MouseEffect from '../components/Mouse'
import Button from '../components/navbar2/buttons/Button'
import Experience from '../components/Experience'



const Home = () => {

    return (
        <div id='home' className='relative'>

            {/* <Button/> */}
            <Banner />
            <Skill />
            <Projects />
            <About />
            <Experience />
            <Contact />
            {/* <Education /> */}

        </div>
    )
}

export default Home
