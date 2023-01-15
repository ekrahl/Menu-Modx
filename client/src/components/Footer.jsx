import React from 'react';
const currentDate = new Date();

const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      Menu Modx © {currentDate.getFullYear()}
    </p>
  </div>
);

export default Footer;