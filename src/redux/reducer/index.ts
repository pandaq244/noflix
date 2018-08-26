import { 
    IEpisode, 
    IEpisodeAction,
    ISeries, 
    ISeriesNav, 
    ISeriesNavAction,
} from '../interface';

import { 
    episodeInitState, 
    seriesInitState, 
    seriesNavInitState 
} from '../init';


export const seriesReducer = (state: ISeries = seriesInitState, action: any) => {
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

export const episodeReducer = (state: IEpisode = episodeInitState, action: IEpisodeAction) => {
    switch(action.type) {
        case 'updateEpisodeInfo': 
            state = {
                description: action.payload.description,
                name: action.payload.name,
                source: action.payload.source
            };
            break;
    };
    return state;
};

export const seriesNavReducer = (state: ISeriesNav = seriesNavInitState, action: ISeriesNavAction) => {
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