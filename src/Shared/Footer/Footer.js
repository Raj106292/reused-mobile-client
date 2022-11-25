import React from 'react';
import icon from '../../assets/icon.webp'

const Footer = () => {
    return (
        <div className='mt-12'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={icon} style={{ width: '50px', height: '50px' }} alt="" />
                    <p>RD's Mobile Island.<br />Providing reliable secondhand mobile since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Brands</span>
                    <div className='flex flex-wrap gap-5'>
                        <p className="link link-hover">apple</p>
                        <p className="link link-hover">samsung</p>
                        <p className="link link-hover">xiaomi</p>
                        <p className="link link-hover">vivo</p>
                        <p className="link link-hover">oppo</p>
                        <p className="link link-hover">techno</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;