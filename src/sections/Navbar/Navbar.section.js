import React, { useState, useEffect } from 'react';
import './Navbar.style.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <div className="bg-teal-400 py-2 px-20 flex justify-between items-center">
        <div className="">
          <p className="text-teal-100 text-2xl font-medium">Next big event:</p>
        </div>

        <div>
          <a href="facebook" className="inline-block p-2 text-teal-200 hover:text-teal-100" style={styles.a}>facebook</a>
          <a href="google" className="inline-block p-2 mr-6 text-teal-200 hover:text-teal-100" style={styles.a}>google</a>
        </div>
      </div>

      <div style={scrolled ? styles.fixed : null}>
        <div className="flex justify-between items-center px-20 my-2 w-screen">
          <a className="flex items-center" href="/" style={styles.a}>
            <img src="https://cdn4.iconfinder.com/data/icons/ramadhan-3/512/islam_moon_ramadhan_prayer-20-256.png"
              alt="logo" width="75" className="mr-5" />
            <div className="text-center">
              <p className="m-0 text-gray-800 text-2xl">Buea islamic</p>
              <p className="m-0 text-gray-800 text-lg">Complex</p>
            </div>
          </a>

          <div>
            <a href="/" className="inline-block px-3 py-2 mx-6 text-gray-800 hover:text-teal-500" style={styles.a}>Home</a>
            <a href="/about" className="inline-block px-3 py-2 mx-6 text-gray-800 hover:text-teal-500" style={styles.a}>About</a>
            <a href="/programs" className="inline-block px-3 py-2 mx-6 text-gray-800 hover:text-teal-500" style={styles.a}>Programs</a>
            <a href="/contact" className="inline-block px-3 py-2 mx-6 text-gray-800 hover:text-teal-500" style={styles.a}>Contact</a>
            <a href="/donate"
              className="inline-block px-3 py-2 mx-6 text-teal-100 font-medium bg-teal-400 rounded hover:text-teal-100 hover:bg-teal-300 transition ease-in duration-150"
              style={styles.a}>
              Donate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  fixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#fcfbfb',
  },
  a: {
    textDecoration: 'none'
  }
}