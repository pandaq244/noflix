export interface IProps {
    readonly value: string;
    readonly index: number;
    readonly navigation: {
        bookmark: number;
        options: string[];
    };
    readonly setBookmark: any;
};
