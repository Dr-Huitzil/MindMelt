import { Link } from 'gatsby'
import React, {useState} from 'react'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <section className="navigation">
        <nav>
         {/* <Link to="/"><img src={Logo} alt="logo" className='image-clickable'/></Link> */}
            <div class="nav-links" id="nav-links">
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>    
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/about">About</Link></li> */}
                </ul>
            </div>
        </nav>
    </section>
    
  )
}
