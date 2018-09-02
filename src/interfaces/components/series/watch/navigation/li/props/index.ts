export default interface IWatchNavigationLiProps {
    value: string,
    index: number,
    navigation: {
        bookmark: number,
        options: string[]
    },
    updateBookmark: any
};
