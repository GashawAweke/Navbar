import { FaBars } from 'react-icons/fa';
import logo from './assets/nexterizeFull.png';
import { links, social } from './data';
import { useRef, useState } from 'react';

// innerHeight and innerWidth
// console.log('height', window.innerHeight);
// console.log('width', window.innerWidth);

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    // console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linkStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='logo' src={logo} alt='logo' />
          <button onClick={toggleLinks} className='nav-toggle'>
            <FaBars />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyle}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {/* social linls */}
          <ul className='social-icons'>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;

              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
