import * as React from 'react';

import {
    DesktopSmallUpdate
} from '../../../../components/';

import './index.css';

export default class DesktopHomeScreen extends React.Component {
    public componentWillMount() {
        document.title='NoFlix';
    };
    public render() {
        return(
            <main className="main-app main-app--desktop">
                <div className="series-small-container series-small-container--desktop">
                    <DesktopSmallUpdate  title="Recent Update (WITHOUT ORDER)" query={{
                            collection: 'series',
                            name: '',
                            order: 'name'
                        }}
                    />
                </div>
                <div className="series-small-container series-small-container--desktop">
                    <DesktopSmallUpdate  title="Popular Series (WITHOUT ORDER)" query={{
                            collection: 'series',
                            name: '',
                            order: 'name'
                        }}
                    />
                </div>
                <div className="series-small-container series-small-container--desktop">
                    <DesktopSmallUpdate  title="Popular Films (WITHOUT ORDER)" query={{
                            collection: 'series',
                            name: '',
                            order: 'name'
                        }}
                    />
                </div>
            </main>
        );
    };
};
