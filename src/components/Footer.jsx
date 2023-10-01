import React from 'react';
import { styles } from '../styles';
import { linkedinIcon, whatsappIcon, gmailIcon } from "../assets";


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer
      className={`
        ${styles.paddingX} w-full items-center py-5 bg-primary
      `}>
      <div className="flex items-center md:justify-between justify-center flex-wrap gap-3 max-w-7xl mx-auto">
        <p>© Copyright <span id="year">{year}</span> - Rizwan Manzoor</p>
        <ul className="flex items-center gap-x-6 gap-y-2">
          <li className='w-12'>
            <a href="mailto:rizwanmanzoor200@gmail.com" target="_blank" title="gmail">
              <img
                src={gmailIcon}
                alt='gmail'
                className='w-full h-full'
              />
            </a>
          </li>
          <li className='w-12'>
            <a href="https://www.linkedin.com/in/rizwan-manzoor/" target="_blank" title="linkedin">
              <img
                src={linkedinIcon}
                alt='github'
                className='w-full h-full'
              />
            </a>
          </li>
          <li className='w-12'>
            <a href="https://wa.me/923454455148" target="_blank" title='whatsapp'>
              <img
                src={whatsappIcon}
                alt='whatsapp'
                className='w-full h-full'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
