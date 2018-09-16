export interface IProps {
    readonly classList: string;
    readonly query: {
        collection: string;
        count: number;
        name: string;
        type: number;
        order: string;
    }
};

export interface IState {
    list: any
};
