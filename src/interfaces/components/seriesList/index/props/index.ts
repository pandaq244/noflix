export default interface ISeriesListProps {
    readonly listClass: string,
    readonly query: {
        collection: string,
        count: number,
        name: string,
        type: number,
        order: string
    }
};
