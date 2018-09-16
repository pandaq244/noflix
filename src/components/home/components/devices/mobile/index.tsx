import * as React from 'react';

import {
    MobileSmallUpdate
} from '../../../../series_list/';

export default () => (
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
