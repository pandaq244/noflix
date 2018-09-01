import {
    RouteComponentProps
} from 'react-router-dom';

export default interface IWatchContainerProps extends RouteComponentProps<any> {
    series: any,
    readonly updateEpisode: (data: any) => void,
    readonly updateSeries: (data: any) => void
};
