import * as React from 'react';

import MediumUpdate from '../mediumUpdate';
import RecentUpdate from '../smallUpdate';

import './index.css';

class SeriesScreen extends React.Component {
    public render() {
        return(
            <React.Fragment>
                <div className="series-small-container">
                    <RecentUpdate />
                </div>
                <div className="series-medium-container">
                    <MediumUpdate  name="Series" />
                </div>
            </React.Fragment>
        );
    };
};

export default SeriesScreen;