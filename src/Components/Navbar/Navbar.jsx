import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const [navbarHeight, setNavbarHeight] = useState('110px');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setNavbarHeight('80px');
      } else {
        setNavbarHeight('110px');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      style={{ height: navbarHeight }}
      className={`z-50 fixed top-0 left-0 right-0 py-1 uppercase text-white bg-slate-700 flex items-center transition-[height] duration-500`}
    >
      <div className="container flex justify-between items-center bg-slate-700 z-50">
        <h1 className="absolute bg-slate-700 top-0 bottom-0 flex items-center justify-center">
          <Link className="font-bold text-2xl md:text-4xl">
            start framework
          </Link>
        </h1>
        <ul
          className={`flex ps-6 pt-12 pb-5  gap-8 font-bold md:flex-row flex-col md:static absolute -top-[800px] left-0 right-0 md:p-0 bg-slate-700 duration-700 ms-auto -z-40 transition-[top] ${
            isNavOpen && style.open
          }`}
        >
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: '#1abc9c',
                      padding: '8px 10px',
                      borderRadius: '5px',
                    }
                  : {}
              }
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: '#1abc9c',
                      padding: '8px 10px',
                      borderRadius: '5px',
                    }
                  : {}
              }
              to="portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: '#1abc9c',
                      padding: '8px 10px',
                      borderRadius: '5px',
                    }
                  : {}
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <i
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          className="ms-auto fa-solid fa-bars md:hidden text-5xl cursor-pointer"
        ></i>
      </div>
    </nav>
  );
}
