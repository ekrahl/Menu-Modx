import React from 'react';
const currentDate = new Date();

const Footer = () => (

  <p className="dark:text-gray-200 text-gray-700 text-center m-20">
    MenuModx © {currentDate.getFullYear()}
  </p>

);

export default Footer;