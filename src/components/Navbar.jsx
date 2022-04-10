import './Navbar.scss'
import {useEffect, useState} from 'react'
function Navbar() {
  const [scrolled,setScrolled]=useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 40 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  let navbarClasses=['Navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  return (
    <div className={navbarClasses.join(' ')}>
      <div className="logo">
      lily sweets
      </div>
      <div className="burger-menu">
         <span></span>
         <span></span>
         <span></span> 
      </div>
    </div>
  )
}

export default Navbar