export default interface ISeriesListProps {
    readonly classList: string,
    readonly query: {
        collection: string,
        count: number,
        name: string,
        type: number,
        order: string
    }
};
