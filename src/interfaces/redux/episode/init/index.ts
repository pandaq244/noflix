import IAction from '../../default/';

export interface IEpisode {
    description: string,
    name: string,
    source: string
};

export interface IEpisodeAction extends IAction {
    payload: {
        description: string,
        name: string,
        source: string
    };
};
