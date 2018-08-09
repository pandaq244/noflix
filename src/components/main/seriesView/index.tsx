import * as React from 'react';

import MediumUpdate from '../mediumUpdate';
import SmallUpdate from '../smallUpdate';

import './index.css';

class SeriesScreen extends React.Component {
    public render() {
        return(
            <React.Fragment>
                <div className="series-small-container">
                    <SmallUpdate title="Popular Series" query="series" />
                </div>
                <div className="series-medium-container">
                    <MediumUpdate  name="Series" query="series" />
                </div>
            </React.Fragment>
        );
    };
};

export default SeriesScreen;