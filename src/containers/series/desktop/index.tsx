import * as React from 'react';

import MediumUpdate from '../../../components/mediumUpdate';
import SmallUpdate from '../../../components/smallUpdate';

import './index.css';

export default class DesktopSeriesSceen extends React.Component {
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
                    <MediumUpdate  title="Series (ORDER BY UPLOAD)" query="series" />
                </div>
            </main>
        );
    };
};
