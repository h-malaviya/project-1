import React from 'react'
import ThemeButton from './ThemeButton'
import NavButton from './NavButton'
import '../styles/navBar.scss'
import icon1 from '../../assets/icons/icon1.png'
import { useState } from 'react'
function NavBar() {
  const navLinks=[
    {
      text:'Home',
      url:'/'
    },
    {
      text:'About',
      url:'/about'
    },
    {
      text:'Docs',
      url:'/docs'
    }
    
  ]
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        
        <div className="company-title">
          <button
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span ></span>
            <span></span>
            <span ></span>
          </button>

          <img src={icon1} alt="Logo" className="company-logo" />
          <h2 className="company-name">Straut</h2>
        </div>

        <div className="nav-links">
          {navLinks.map((i, idx) => (
            <NavButton key={idx} text={i.text} url={i.url} />
          ))}
        </div>

        <ThemeButton className="theme-button" />
      </nav>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <div className="sidebar-links">
          {navLinks.map((i, idx) => (
            <NavButton
              key={idx}
              text={i.text}
              url={i.url}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </aside>
    </>
  )
}

export default NavBar