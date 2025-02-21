import { FaBars } from 'react-icons/fa';
import logo from './assets/nexterizeFull.png';
import { links, social } from './data';
import { useRef, useState } from 'react';

// innerHeight and innerWidth
// console.log('height', window.innerHeight);
// console.log('width', window.innerWidth);

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='logo' src={logo} alt='logo' />
        <button onClick={toggleLinks} className='nav-toggle'>
          <FaBars />
        </button>
      </div>

      {showLinks && (
        <div className='links-container'>
          <ul className='links'>
            {links.map((links) => {
              const { id, url, text } = links;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
