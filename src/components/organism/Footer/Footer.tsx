import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-10 mt-[100px]">
      <div className="flex gap-8 items-center">
        <Logo />
      </div>
      
      <div className="text-sm text-gray-500 dark:text-neutral-400">
        <p>support: <a href="mailto:aimusic@gmail.com" className="text-blue-500 hover:underline">aimusic@gmail.com</a></p>
      </div>

      <div className="flex gap-6">
        {/* <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 transition">
          <FaFacebookF />
        </a> */}
        <a href="https://x.com/Zalowsski" aria-label="Twitter" className="hover:text-blue-500 transition">
          <FaTwitter />
        </a>
        {/* <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-500 transition">
          <FaInstagram />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
