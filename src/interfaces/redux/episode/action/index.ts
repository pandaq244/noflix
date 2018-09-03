export default interface IAction {
    type: string;
    payload: {
        description: string;
        name: string;
        source: string;
    };
};
