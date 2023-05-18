import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'
function Nav() {

    const [show,handleShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if (window.scrollY >100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavbar); 
     return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
        <img onClick={() => navigate("/")}
        className="nav_logo" 
        src="https://i.imgur.com/2K69lMU.png" 
        alt=''
        />
        <img onClick={() => navigate("/profile")}
        className="nav_avatar" 
        src="https://i.imgur.com/wGKF9kE.png" 
        alt =''
        />
        </div>

    </div>
  )
}

export default Nav