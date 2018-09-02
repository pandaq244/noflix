import * as React from 'react';


import {
    DesktopMediumUpdate,
    DesktopSmallUpdate
} from '../../../../components/';

import './index.css';

export default class DesktopSeriesSceen extends React.Component {
    public componentWillMount() {
        document.title='NoSeries';
    };
    public render() {
        return(
            <main className="main-app main-series--desktop">
                <div className="series-small-container series-small-container--desktop">
                    <DesktopSmallUpdate title="Popular Series (ORDER BY NAME)" query={{
                        collection: 'series',
                        name: '',
                        order: 'name'
                    }} />
                </div>
                <div className="series-medium-container series-medium-container--desktop">
                    <DesktopMediumUpdate  title="Series (ORDER BY UPLOAD)" query={{
                            collection: 'series',
                            name: '',
                            order: 'update'
                        }}
                    />
                </div>
            </main>
        );
    };
};
