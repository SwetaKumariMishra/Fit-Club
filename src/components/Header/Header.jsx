import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import bar from '../../assets/bar.png';
import {Link} from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true:false;

  const[menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
        <img src={logo} alt='' className='logo'/>
        {(menuOpened=== false && mobile=== true) ? 
        (
          <div 
          style={{backgroundColor: 'var(--appColor)', 
          padding: '0.3rem', 
          borderRadius: '5px'}}
          onClick={()=> setMenuOpened(true)}
          >
          <img src={bar} alt="" style={{width: '3rem', height: '2rem'}}/></div>
        ): <ul className='header-menu'>
            <li> <Link
            onClick={()=> setMenuOpened(false)}
            activeClass='active'
            to='Hero'
            spy={true}
            smooth={true}>Home</Link></li>
            <li> <Link
            onClick={()=> setMenuOpened(false)}
            to='Programs'
            spy={true}
            smooth={true}>Programs</Link></li>
            <li> <Link
            onClick={()=> setMenuOpened(false)}
            to='Reasons'
            spy={true}
            smooth={true}>Why us</Link></li>
            <li><Link
            onClick={()=> setMenuOpened(false)}
            to='Plans-container'
            spy={true}
            smooth={true}>Plans</Link></li>
            <li>
            <Link
            onClick={()=> setMenuOpened(false)}
            to='Testimonials'
            spy={true}
            smooth={true}>Testimonials</Link></li>
        </ul>}

</div>
  )
}

export default Header