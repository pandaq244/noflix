import {
    RouteComponentProps
} from 'react-router-dom';

export default interface IProps extends RouteComponentProps<any> {
    readonly id: string;
};
