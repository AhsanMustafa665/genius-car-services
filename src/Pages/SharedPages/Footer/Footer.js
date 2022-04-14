import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-success text-center text-white py-2 pt-4 mt-4 '>
            <p><small>Copyright © {new Date().getFullYear()} </small></p>
        </footer>
    );
};

export default Footer;