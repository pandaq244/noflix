import * as React from 'react';

import {
    DesktopSmallUpdate
} from '../../../../series_list/';

export default () => (
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
