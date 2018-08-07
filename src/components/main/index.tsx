import * as React from 'react';

import RecentUpdate from './smallUpdate';

import './index.css';

class StartScreen extends React.Component {
    public render(){
        return(
            <React.Fragment>
                <div className="series-small-container">
                    <RecentUpdate />
                </div>
                <div className="series-small-container">
                    <RecentUpdate />
                </div>
                <div className="series-small-container">
                    <RecentUpdate />
                </div>
            </React.Fragment>
        );
    };
};

export default StartScreen;