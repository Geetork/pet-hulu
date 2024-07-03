'use client';

import React, { useState } from 'react';
import { Button } from '@/components';
import Image from 'next/image';
import subscriptions, { ISubscription } from '@/subscriptions';
import { basePath } from '@/next.config';

const tabs = ['Hulu', 'Disney Bundle', 'Live TV']

const SubscriptionCard: React.FC<{ 
    subscription: ISubscription,
    subscriptionTitle: string,
    subscriptionName: string,
}> = ({ subscriptionTitle, subscription, subscriptionName }) => (
    <div className='flex flex-col gap-2 w-full max-xs:text-[0.6rem]'>
        {subscriptionTitle === 'Hulu' && (
            <div className='relative w-full h-0 pb-[5%]'>
                <Image
                    priority={true}
                    src={`${basePath}/assets/hulu-logo.svg`}
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        )}
        <h1>{subscriptionName}</h1>
        <div className='h-[40px]'>
            <Button
                title={`${subscription['Monthly price']}`}
                type='secondary'
                className='bg-gray-100/90 text-black hover:bg-gray-400 max-xs:text-[0.6rem] max-xs:px-2'
            />
        </div>
    </div>
);

const FieldRow: React.FC<{
    field: string,
    data: {
        [key: string]: ISubscription,
    },
}> = ({ field, data }) => (
    <div className='flex border-t-gray-800 border-t-[1px]'>
        <div className='flex md:flex-row flex-col w-full text-sm py-4 gap-4 md:gap-0'>
            <div className='md:w-[40%] w-full'>
                <h1 className='md:text-start'>{field}</h1>
            </div>
            <div className='w-full flex md:w-[60%] justify-between gap-6'>
                {Object.entries(data).map(([subscriptionTitle, subscription], id) => (
                    <div key={id} className='flex-1'>
                        {
                            subscription[field] ? 
                            subscription[field] === true ? <div className='relative w-full h-0 pb-[7%] md:pb-[4%]'><Image src={`${basePath}/assets/icon-green-ok.svg`} alt='ok' layout='fill'
                            objectFit='contain'/></div> : 
                            subscription[field] : <span>-</span>
                        }
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SubscriptionPlan: React.FC<{ 
    data: {
        [key: string]: ISubscription,
    },
    subscriptionTitle: string,
}> = ({ data, subscriptionTitle }) => {
    const fieldset = Object.keys(data[Object.keys(data)[0]]);

    return (
        <section className='flex flex-col w-full'>
            <div className='sticky top-0 flex w-full justify-between md:w-full md:justify-end my-6 bg-black py-4 z-10'>
                <div className='top-0 flex flex-row md:w-[60%] w-full justify-between gap-2'>
                    {Object.entries(data).map(([title, subscription], id) => (
                        <SubscriptionCard key={id} subscriptionTitle={subscriptionTitle} subscriptionName={title} subscription={subscription} />
                    ))}
                </div>
            </div>
            {fieldset.map((field, id) => (
                <FieldRow key={id} field={field} data={data} />
            ))}
        </section>
    )
}

const SubscriptionPlans = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id='subscriptions' className='w-full bg-black text-gray-200 p-6 pt-10 text-center flex flex-col items-center gap-2'>
            <h1 className='text-4xl font-semibold'>Select Your Plan</h1>
            <p className='my-4 max-w-[600px]'>No hidden fees, equipment rentals, or installation appointments.
            Switch plans or cancel anytime.**</p>

            <ul className='flex justify-center gap-4 text-nowrap bg-emerald-600 rounded-xl p-1'>
            {
                tabs.map((tab, id) => (
                    <li key={id}>
                        <Button 
                            onClick={() => setActiveTab(tab)}
                            title={tab}
                            type='tertiary'
                            className={`font-semibold text-[0.7rem] sm:text-[1rem] px-4 border-b-transparent py-2 text-gray-700 ${tab === activeTab ? 'bg-gray-200' : ''} transition-none`}
                        />
                    </li>
                ))
            }
            </ul>
            <SubscriptionPlan data={subscriptions[activeTab]} subscriptionTitle={activeTab}/>
        </section>
    )
}

export default SubscriptionPlans;