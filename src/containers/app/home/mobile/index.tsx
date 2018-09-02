import * as React from 'react';

import Navigation from './navigation/';

import {
    MobileSmallUpdate
} from '../../../../components/';

import './index.css';

export default class MobileHomeScreen extends React.Component {
    public render() {
        return(
            <main className="main-app main-app--mobile">
                <Navigation />
                <div className="series-small-container series-small-container--mobile">
                    <MobileSmallUpdate  title="Recent Update (WITHOUT ORDER)" query={{
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
