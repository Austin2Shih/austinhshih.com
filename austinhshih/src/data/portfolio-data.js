const portfolioData = [
    {
        title: 'Moodify',
        shortDesc: 'Music mood classifier',
        points: [
            "Trained Random Forest model achieving over 95% accuracy and 0.95 F1-score",
            "Features extracted from averages of MFCC’s, mel spectrograms, and chromagrams",
            "Server deployed reliably on AWS supported by custom Next.js frontend",
        ],
        imageFileName: 'moodify.png',
        projectLink: 'https://moodify.austinshih.com',
    },
    {
        title: 'TortlePoll - Live polling website',
        shortDesc: 'Live polling site similar to StrawPoll developed with Next.js.',
        points: [
            "Live results updating in the front-end",
            "Filter results by demographic group",
            "Keep track of polls you've created and voted for in your dashboard"
        ],
        imageFileName: 'TortlePoll.PNG',
        projectLink: 'https://github.com/Austin2Shih/TortlePoll-Live-polling-website',
    },
    {
        title: 'MusicMaps',
        shortDesc: 'Map of nearby Spotify listening activity for discovering new music',
        points: [
            "Find out what the nearest users are listening to with live updates",
            "Express app using Apollo/GraphQL",
        ],
        imageFileName: 'MusicMaps.png',
        projectLink: 'https://github.com/Austin2Shih/Music-Map',
    }
]

export default portfolioData