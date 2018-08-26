import * as React from 'react';

import MediumUpdate from '../mediumUpdate';
import SmallUpdate from '../smallUpdate';

import './index.css';

export default class SeriesView extends React.Component {
    public componentWillMount() {
        document.title='NoSeries';
    };
    public render() {
        return(
            <main className="main-app main-series">    
                <div className="series-small-container">
                    <SmallUpdate title="Popular Series (ORDER BY NAME)" query="series" />
                </div>
                <div className="series-medium-container">
                    <MediumUpdate  name="Series (ORDER BY UPLOAD)" query="series" />
                </div>
            </main>
        );
    };
};