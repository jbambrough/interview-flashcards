import React from 'react';
import '../styles/styles.css';

const Header = (props) => {
  return (
    <div className='header-margin'>
      <div className='interview-header'><h2>{props.title}</h2></div>
    </div>);
};

export default Header;