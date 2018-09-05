import * as React from 'react';

import {
    DesktopSmallUpdate
} from '../../../../';

import {
    IHomeState as IState
} from '../../../../../interfaces/components/';

export default class DesktopHome extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    };
    public render() {
        return(
            <React.Fragment>
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
            </React.Fragment>
        );
    };
};
