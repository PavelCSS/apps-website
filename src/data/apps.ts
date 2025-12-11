export interface AppData {
    id: string;
    appleId?: string;
    googleId?: string;
    logo: string;
    name: string;
    description: string;
    forChild: boolean;
    withAdmob: boolean;
    withAnalytics: boolean;
    withCrashlytics: boolean;
}

export const apps: AppData[] = [
    {
        id: 'AlphabetOfTime',
        appleId: '6755596771',
        googleId: 'ua.zibyapp.alphabet_of_time',
        logo: '/logos/alphabet-of-time.png',
        name: 'Alphabet of Time',
        description:
            'The best way for kids to learn the clock, seasons, and time! Fun, interactive, and educational. Download now!',
        forChild: true,
        withAdmob: true,
        withAnalytics: true,
        withCrashlytics: true,
    },
    {
        id: 'LearningTogether',
        appleId: '6455684710',
        googleId: 'ua.zibyapp.baby_learn',
        logo: '/logos/learning-together.png',
        name: 'Learning together',
        description:
            'Your baby will be able to explore a variety of colors, letters, numbers and shapes by selecting them on the screen while listening to their names.',
        forChild: true,
        withAdmob: true,
        withAnalytics: true,
        withCrashlytics: true,
    },
    {
        id: 'DeckKeeper',
        appleId: '6456039757',
        logo: '/logos/DeckKeeper.png',
        name: 'DeckKeeper',
        description:
            'This app provides the ultimate gaming experience. You no longer have to waste time shuffling cards or choosing the next card - DeckKeeper does it all automatically.',
        forChild: false,
        withAdmob: true,
        withAnalytics: false,
        withCrashlytics: false,
    },
    {
        id: 'ABColors',
        appleId: '1597079749',
        logo: '/logos/ABColors.png',
        name: 'ABColors',
        description:
            'This application will help your kid learn colors by choosing them and listening to their names, as well as the kid can easily test their knowledge in the game where you need to find a color.',
        forChild: true,
        withAdmob: false,
        withAnalytics: false,
        withCrashlytics: false,
    },
    {
        id: 'ABCNumbers',
        appleId: '1638628911',
        logo: '/logos/ABC-Numbers.png',
        name: 'ABC Numbers',
        description:
            'This application will help your kid learn numbers by choosing them and listening to their names, as well as the kid can easily test their knowledge in the game where you need to find a number.',
        forChild: true,
        withAdmob: false,
        withAnalytics: false,
        withCrashlytics: false,
    },
];
