
import Link from "next/link";
import Image from "next/image";
import {MenuBookOutlined ,MenuOutlined  } from "@mui/icons-material";
import { useState } from "react";


const Navbar =()=>{
    const [ isOpen , setIsOpen] = useState(false)


    const toggleMenu =() =>{setIsOpen(!isOpen)}

    return (
        <>
        <div className="navbar" id="nav-menu">
            <div id="nav-logo"  className={!isOpen ? "my-logo-open" : "my-logo-close"}>

                <Image src="https://res.cloudinary.com/admitad-gmbh/image/upload/h_0.5,f_auto/ixaa8tyj24yv45cmgysl.png" height="33" width="95" alt="nav-logo"/>
            </div>
            <div className="menu-button" onClick={toggleMenu}><MenuOutlined  className="menu"/></div>

            <nav className={!isOpen ? "nav-close" : "nav-open"}>
                <Link className="link" href="Workshops">Workshops</Link>
                <Link className="link" href="Meetups">Meetups</Link>
                <Link className="link" href="Performances" >Performances</Link>
                <Link className="link" href="Conferences">Conferences</Link>
                <Link className="link" href="Talks">Talks</Link>
            </nav>
            <div className="changer"><MenuBookOutlined className="menu"/></div>
        </div>
        </>
    )
}

export default Navbar