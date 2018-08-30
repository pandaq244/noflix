import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SeriesList from '../../components/seriesList/';

import './index.css';

interface IProps extends RouteComponentProps<any> {
    readonly id: string
};

export default class SearchView extends React.Component<IProps> {
    public async componentWillMount() {
        document.title='NoSearch';
    };
    public render() {
        return(
            <main className="main-app main-search">
                <h2 className="searches-title">search4: {this.props.match.params.id}</h2>
                <div className="search-container">
                    <h3>Results:</h3>
                    <SeriesList
                        listClass='series-search-container'
                        query={{
                            collection: 'series',
                            count: 7,
                            name: this.props.match.params.id,
                            order: 'name',
                            type: 1
                        }}
                    />
                </div>
            </main>
        );
    };
};
