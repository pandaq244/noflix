import {
    RouteComponentProps
} from 'react-router-dom';

export default interface IProps extends RouteComponentProps<any> {
    readonly series: any;
    readonly updateEpisode: (data: any) => void;
    readonly updateSeries: (data: any) => void;
};
