
export default interface IAllUpdateProps {
    title: string;
    classList: string;
    query: {
        collection: string;
        name: string;
        count: number;
        order: string;
    };
};
