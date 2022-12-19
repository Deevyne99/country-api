import React, { useEffect, useRef, useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { useGlobalContext } from '../../Hooks/context/Context'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const headingElm = useRef()
  const { theme, toggleTheme } = useGlobalContext()
  // console.log(headingElm.current)
  const stickNav = () => {
    const scrollHeight = window.pageYOffset
    const navHeight = headingElm.current.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', stickNav)
    return () => {
      window.removeEventListener('scroll', stickNav)
    }
  }, [scroll])

  return (
    <header
      className={`${scroll ? 'heading fixed' : 'heading'} ${
        theme === 'light-theme' ? 'bg-white' : ''
      }`}
      ref={headingElm}
      data-testid='header'
    >
      <div className='container'>
        <nav className='navbar'>
          <h2>where in the world</h2>
          <button
            onClick={toggleTheme}
            data-testid='toggle-theme'
            className='toggle-btn'
          >
            {theme === 'light-theme' ? <FaMoon /> : <FaSun />}
            {theme === 'light-theme' ? 'dark mode' : 'light mode'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
