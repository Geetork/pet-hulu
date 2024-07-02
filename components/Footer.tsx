import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center bg-black pb-4 pt-16 w-full text-gray-400 text-xs'>
            <div className='flex gap-4'>
                <Link href='#'>Terms of Service</Link>
                <span className="after:content-['|']"></span>
                <Link href='#'>Privacy Policy</Link>
            </div>
            <small>&copy; Copyright Hulu. All Rights Reserved.</small>
        </footer>
    )
}

export default Footer;