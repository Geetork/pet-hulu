import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { basePath } from '@/next.config';

const Welcome = () => {
  return (
    <section className='w-full h-[calc(100vh-80px)] lg:bg-bg-lg-hero md:bg-bg-md-hero bg-bg-xs-hero bg-cover flex flex-col gap-10 p-10 items-center justify-end text-gray-200 font-bold'>
        <div className='container flex gap-10 max-w-[670px] h-fit'>
            <div className='flex flex-col gap-4 text-center w-full justify-between'>
                <h1 className='text-green-primary font-bold text-sm'>DISNEY BUNDLE DUO BASIC</h1>

                <div className='relative w-full h-0 pb-[20%]'>
                    <Image
                        priority={true}
                        src={`${basePath}/assets/icon-welcome.png`}
                        alt='logo'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <p className='xs:text-2xl text-sm'>Both with ads, for<br/>$9.99/month</p>

                <div className='h-[40px]'>
                    <Button 
                        title='GET THEM BOTH'
                        type='primary'
                    />
                </div>
            </div>   

            <div className='flex flex-col gap-4 text-center w-full justify-between'>
                <h1 className='text-green-primary font-bold text-sm'>DISNEY BUNDLE TRIO BASIC</h1>

                <div className='relative w-full h-0 pb-[20%]'>
                    <Image
                        priority={true}
                        src={`${basePath}/assets/icon-welcome-2.png`}
                        alt='logo'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <p className='xs:text-2xl text-sm'>All with adds, for<br/> $14.99/month.</p>

                <div className='h-[40px]'>
                    <Button 
                        title='GET ALL THERE'
                        type='primary'
                    />
                </div>
            </div>        
        </div>

        <a className='text-lg font-light underline underline-offset-4 transition-all ease-in-out delay-150 duration-200 hover:text-green-primary' href="#">SIGN UP FOR HULU ONLY</a>

        <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-[0.7rem]'>VIEW MORE PLANS</h1>
            <a href="#subscriptions" className='flex rounded-full border-2 before:content-arrow w-[66px] h-[66px] items-center justify-center before:h-[20px]'>
            </a>
        </div>
    </section>
  )
}

export default Welcome;