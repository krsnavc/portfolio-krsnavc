// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex border-t-2 justify-center items-center h-16 bg-slate-50 text-slate-600">
      <p>&copy; {currentYear}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
