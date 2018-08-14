interface ISeries {
    description: string,
    episodeNumber: number,
    episodes: {},
    id: string,
    name: string,
    seasonNumber: number
};

interface IEpisode {
    description: string,
    name: string,
    source: string
};

interface ISeriesNav {
    bookmark: number,
    options: string[]
};

const seriesState = {
    description: '',
    episodeNumber: 1,
    episodes: {},
    id: '',
    name: '',
    seasonNumber: 1
};

const episodeState = {
    description: '',
    name: '',
    source: ''
};

const seriesNavState = {
    bookmark: 0,
    options: [
        'Overview',
        'Episodes',
        'More like this',
        'Details'
    ]
};

const seriesReducer = (state: ISeries = seriesState, action: any) => {
    switch(action.type) {
        case 'updateSeriesInfo': 
            state = {
                ...state,
                description: action.payload.description,
                episodes: action.payload.episodes,
                id: action.payload.id,
                name: action.payload.name,

            };
            break;
        case 'updateSeriesSetings':
            state = {
                ...state,
                episodeNumber: action.payload.episode,
                seasonNumber: action.payload.season
            };
            break;
    };
    return state;
};

const episodeReducer = (state: IEpisode = episodeState, action: any) => {
    switch(action.type) {
        case 'updateEpisodeInfo': 
            state = {
                ...state,
                description: action.payload.description,
                name: action.payload.name
            };
            break;
    };
    return state;
};

const seriesNavReducer = (state: ISeriesNav = seriesNavState, action: any) => {
    switch(action.type) {
        case 'updateNavBookmark':
            state = {
                ...state,
                bookmark: action.payload
            };
            break;    
    };
    return state;
};

export {
    seriesReducer,
    seriesNavReducer,
    episodeReducer,
}