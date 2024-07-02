'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { basePath } from '@/next.config';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <header className='absolute top-0 w-full h-[74px] flex items-center px-10 justify-between'>
            <Image
                priority={true}
                src={`${basePath}/assets/logo.png`}
                alt='logo'
                height={24}
                width={61}
            />

            <nav className='w-fit h-[40px]'>
                <Button
                    type='tertiary'
                    title='LOG IN'
                    className='max-sm:hidden'
                />

                <Button
                    onClick={() => setIsVisible(prevState => !prevState)}
                    type='secondary'
                    title=''
                    className={`sm:hidden before:content-menu min-sm:hidden w-[50px]`}
                />
            </nav>

            <ul className={`sm:hidden absolute -bottom-[120%] right-10 flex flex-col rounded-lg bg-gray-600 ${isVisible ? '' : 'hidden'} w-[272px] z-10`}>
                <li className='h-[48px]'>
                    <Button
                        title='LOG IN'
                        type='tertiary'
                    />
                </li>
                <li className='h-[48px]'>
                    <Button
                        title='SIGN UP NOW'
                        type='primary'
                    />
                </li>
            </ul>
        </header>
    )
}

export default Header;