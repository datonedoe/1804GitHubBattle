// import React from 'react';
// import { NavLink } from 'react-router-dom';
//
// function Nav() {
//   return (
//     <ul className='nav'>
//       <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
//       <li><NavLink activeClassName='active' exact to='/battle'>Battle</NavLink></li>
//       <li><NavLink activeClassName='active' exact to='/popular'>Popular</NavLink></li>
//     </ul>
//
//   )
// }
// export default Nav;

// var React = require('react');
// var NavLink = require('react-router-dom').NavLink;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
      <li><NavLink activeClassName='active' exact to='/battle'>Battle</NavLink></li>
      <li><NavLink activeClassName='active' exact to='/popular'>Popular</NavLink></li>
    </ul>
  )
}
export default Nav;
// module.exports = Nav;


// {/* <ul className='nav'>
// <li>
// <NavLink exact activeClassName='active' to='/'>Home</NavLink>
// </li>
// <li>
// <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
// </li>
// <li>
// <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
// </li>
// </ul> */}
