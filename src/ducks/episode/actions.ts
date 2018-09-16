import * as types from './types';

export const updateEpisode = (data: any) => ({
    payload: {
        description: data.description,
        name: data.name,
        source: data.source
    },
    type: types.UPDATE_INFO
});
