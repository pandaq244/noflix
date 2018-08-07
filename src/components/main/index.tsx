import * as React from 'react';

import SmallUpdate from './smallUpdate';

import './index.css';

class StartScreen extends React.Component {
    public render(){
        return(
            <React.Fragment>
                <div className="series-small-container">
                    <SmallUpdate  title="Recent Update" />
                </div>
                <div className="series-small-container">
                    <SmallUpdate title="Popular Series" />
                </div>
                <div className="series-small-container">
                    <SmallUpdate title="Popular Films" />
                </div>
            </React.Fragment>
        );
    };
};

export default StartScreen;