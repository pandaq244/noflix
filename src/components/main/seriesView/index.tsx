import * as React from 'react';

import MediumUpdate from '../mediumUpdate';
import SmallUpdate from '../smallUpdate';

import './index.css';

class SeriesView extends React.Component {
    public render() {
        return(
            <main className="main-app main-series">    
                <div className="series-small-container">
                    <SmallUpdate title="Popular Series" query="series" />
                </div>
                <div className="series-medium-container">
                    <MediumUpdate  name="Series" query="series" />
                </div>
            </main>
        );
    };
};

export default SeriesView;