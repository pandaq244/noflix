import * as React from 'react';

import SmallUpdate from '../smallUpdate/';

import './index.css';

export default class StartScreen extends React.Component {
    public componentWillMount() {
        document.title='NoFlix';
    };
    public render() {
        alert('dr house ma kilka odcinkow')
        return(
            <main className="main-app"> 
                <div className="series-small-container">
                    <SmallUpdate  title="Recent Update (WITHOUT ORDER)" query="series" />
                </div>
                <div className="series-small-container">
                    <SmallUpdate title="Popular Series (WITHOUT ORDER)" query="series" />
                </div>
                <div className="series-small-container">
                    <SmallUpdate title="Popular Films (WITHOUT ORDER)" query="series" />
                </div>
            </main>
        );
    };
};
