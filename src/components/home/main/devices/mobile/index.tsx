import * as React from 'react';

import {
    MobileSmallUpdate
} from '../../../../';

import {
    IHomeState as IState
} from '../../../../../interfaces/components/';

export default class MobileHome extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    };
    public render() {
        return(
            <React.Fragment>
                <div className="series-small-container series-small-container--mobile">
                    <MobileSmallUpdate  title="Recent Update (WITHOUT ORDER)" query={{
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
