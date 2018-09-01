export default interface IEpisodeAction {
    type: string,
    payload: {
        description: string,
        name: string,
        source: string
    };
};
