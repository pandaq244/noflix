import * as types from './types';

export const updateSettings = (data: any) => ({
    payload: {
        description: data.description,
        episodes: data.episodes,
        id: data.id,
        name: data.name
    },
    type: types.UPDATE_SETTINGS
});

export const updateNumber = (data: any) => ({
    payload: {
        episodeNumber: data.episodeNumber,
        seasonNumber: data.seasonNumber
    },
    type: types.UPDATE_EPISODE
});
