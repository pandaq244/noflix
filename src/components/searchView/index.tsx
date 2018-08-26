import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './index.css';

interface IProps extends RouteComponentProps<any> {
    id: string
};

export default class SearchView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
       
    };
    public componentWillMount() {
        document.title='NoSearch';
    };
    public render() {
        return(
            <main className="main-app main-search"> 
                <h2 className="searches-title">search4: {this.props.match.params.id}</h2>
                <div className="search-container">
                    <h3>Results:</h3>
                    <ul className="element-list series-search-container">
                        <li className="series__li">
                            <img src='' alt="series-preview" />
                            <div className="series__li-title">
                                <span>sadsadsad</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        );
    };
};

