export interface ISeries {
    description: string,
    episodeNumber: number,
    episodes: {},
    id: string,
    name: string,
    seasonNumber: number
};

export interface IEpisode {
    description: string,
    name: string,
    source: string
};

export interface ISeriesNav {
    bookmark: number,
    options: string[]
};

// actions interface 

interface IAction {
    type: string
};

export interface IEpisodeAction extends IAction {
    payload: {
        description: string,
        name: string,
        source: string
    };
};

export interface ISeriesNavAction extends IAction {
    payload: number
};