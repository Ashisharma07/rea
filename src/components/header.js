import React from 'react';
import './header.css';
import logo from './logo.jpg';

// function logo() {
//   return <img src={logo} alt='' />;
// }

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <div>
          <img src={logo} className='logo' alt='' />
        </div>
        <div style={{ flexDirection: 'column' }}>
          <div className='address'>
            PO Box 18641, Unit 132, 4857 Elliot St.<br></br> Delta BC. V4k 4V7
          </div>
          <div className='call'>Phone: (778)-895-5359</div>
          <div className='email'>Email: info@dri-cities.com</div>
        </div>
      </div>

      <div className='sub-header'>
        <h1>Dual Adjustable Nozzle system for B-line Sausage/Bulk Gun</h1>
      </div>
    </>
  );
};

export default Header;
