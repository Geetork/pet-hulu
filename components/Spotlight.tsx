'use client';

import React, { useState } from 'react';
import { Button } from '@/components';

const tabs = ['LIVE SPORTS', 'BREAKING NEWS', 'BIGGEST EVENTS']

const TabContent: React.FC<{ 
    title: string, 
    text: string 
}> = ({ title, text }) => {
    return (
        <article className='flex flex-col max-md:items-center 
                            max-md:text-center gap-4'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p className='max-w-[500px]'>{text}</p>
        </article>
    )
}

const Spotlight = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const bgImage: {[key: string]: string} = {
        'LIVE SPORTS': 'md:bg-tab-1 bg-tab-1-sm', 
        'BREAKING NEWS': 'md:bg-tab-2 bg-tab-2-sm',
        'BIGGEST EVENTS': 'md:bg-tab-3 bg-tab-3-sm'
    }

    const displayTabContent = () => {
        switch (activeTab) {
            case 'LIVE SPORTS':
                return <TabContent 
                    title='Live Sports'
                    text='Catch your games at home or on the go. Stream 
                          live games from major college and pro leagues
                          including the NCAA®, NBA, NHL, NFL, and more.'
                />
            case 'BREAKING NEWS':
                return <TabContent 
                    title='Breaking News'
                    text="Keep pace with what's going on locally and 
                          globally with trusted opinions from all the 
                          top news networks."
                />
            case 'BIGGEST EVENTS':
                return <TabContent 
                    title='Biggest Events'
                    text="Spectacular, can't-miss moments like the 
                          Olympics, Grammys®, Oscars®, Emmys®, and more."
                />
            default:
                break;
        }
    }

    return (
        <section className={`flex flex-col h-screen w-full ${bgImage[activeTab]}
                             bg-cover bg-center p-6 text-gray-200 gap-16 
                             md:items-start md:justify-center`}>
            <ul className='flex justify-center gap-2 text-nowrap'>
            {
                tabs.map((tab, id) => (
                    <li key={id}>
                        <Button 
                            onClick={() => setActiveTab(tab)}
                            title={tab}
                            type='tertiary'
                            className={`text-[0.6rem] xs:text-[0.8rem] rounded-none 
                                        border-b-2 border-b-transparent hover:bg-transparent 
                                        px-[0] py-2 ${tab === activeTab ? 
                                        'text-white border-b-gray-200' : ''}`}
                        />
                    </li>
                ))
            }
            </ul>
            { displayTabContent() }
        </section>
    )
}

export default Spotlight;