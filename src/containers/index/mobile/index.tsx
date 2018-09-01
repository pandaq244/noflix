import * as React from 'react';

import SmallUpdate from '../../../components/smallUpdate/';

import './index.css';

export default class MobileHomeScreen extends React.Component {
    public render() {
        return(
            <main className="main-app">
                <div className="series-small-container">
                    <SmallUpdate  title="Recent Update (WITHOUT ORDER)" query="series" />
                </div>
            </main>
        );
    };
};
