import {
    RouteComponentProps
} from 'react-router-dom';

export default interface ISearchContainerProps extends RouteComponentProps<any> {
    readonly id: string
};
