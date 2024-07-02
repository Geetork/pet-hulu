export interface ISubscription {
    [key:string]: string | boolean
}

const subscriptions: {
    [key: string]: {
        [key: string]: ISubscription
    }
} = {
    'Hulu': {
        'With Ads': {
            'Monthly price': '$7.99/mo',
            'Streaming Library with tons of TV episodes and movies': true,
            'Most new episodes the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Up to 6 user profilesUp to 6 user profiles': true,
            'Watch on 2 different screens at the same time': true,
            'No ads in streaming library': false,
            'Download and watch': false,
        },
        'No Ads': {
            'Monthly price': '$7.99/mo',
            'Streaming Library with tons of TV episodes and movies': true,
            'Most new episodes the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Up to 6 user profilesUp to 6 user profiles': true,
            'Watch on 2 different screens at the same time': true,
            'No ads in streaming library': true,
            'Download and watch': true,
        }
    },
    'Disney Bundle': {
        'Duo Basic': {
            'Monthly price': '$9.99/mo.*',
            'Subscriptions included in each plan': 'Disney+ and Hulu, both with ads',
            'Hulu streaming library with tons of episodes and movies': true,
            'Endless entertainment with Disney+': true,
            'Live sports with ESPN+, now in the Hulu app': false,
            'Most new episodes on Hulu the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Watch on your favorite devices, including TV, laptop, phone, or tablet': true,
            'No ads in Hulu streaming library': false,
            'No ads on Disney+': false,
            'Download and watch on Hulu': false,
            'Download and watch on Disney+': false,
        },
        'Trio Basic': {
            'Monthly price': '$9.99/mo.*',
            'Subscriptions included in each plan': 'Disney+ and Hulu, both with ads',
            'Hulu streaming library with tons of episodes and movies': true,
            'Endless entertainment with Disney+': true,
            'Live sports with ESPN+, now in the Hulu app': false,
            'Most new episodes on Hulu the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Watch on your favorite devices, including TV, laptop, phone, or tablet': true,
            'No ads in Hulu streaming library': false,
            'No ads on Disney+': false,
            'Download and watch on Hulu': false,
            'Download and watch on Disney+': false,
        },
        'Trio Premium': {
            'Monthly price': '$9.99/mo.*',
            'Subscriptions included in each plan': 'Disney+ and Hulu, both with ads',
            'Hulu streaming library with tons of episodes and movies': true,
            'Endless entertainment with Disney+': true,
            'Live sports with ESPN+, now in the Hulu app': false,
            'Most new episodes on Hulu the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Watch on your favorite devices, including TV, laptop, phone, or tablet': true,
            'No ads in Hulu streaming library': false,
            'No ads on Disney+': false,
            'Download and watch on Hulu': false,
            'Download and watch on Disney+': false,
        }
    },
    'Live TV': {
        'With Ads': {
            'Monthly price': '$7.99/mo',
            'Streaming Library with tons of TV episodes and movies': true,
            'Most new episodes the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Up to 6 user profilesUp to 6 user profiles': true,
            'Watch on 2 different screens at the same time': true,
            'No ads in streaming library': false,
            'Download and watch': false,
        },
        'No Ads (Disney+ & Hulu)': {
            'Monthly price': '$7.99/mo',
            'Streaming Library with tons of TV episodes and movies': true,
            'Most new episodes the day after they air†': true,
            'Access to award-winning Hulu Originals': true,
            'Up to 6 user profilesUp to 6 user profiles': true,
            'Watch on 2 different screens at the same time': true,
            'No ads in streaming library': true,
            'Download and watch': true,
        }
    },
}

export default subscriptions;