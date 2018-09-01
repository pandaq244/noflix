import * as React from 'react';

import SmallUpdate from '../../../components/smallUpdate/';

import './index.css';

export default class DesktopHomeScreen extends React.Component {
    public componentWillMount() {
        document.title='NoFlix';
    };
    public render() {
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
