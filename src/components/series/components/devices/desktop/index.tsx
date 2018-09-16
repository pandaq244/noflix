import * as React from 'react';

import {
    DesktopMediumUpdate,
    DesktopSmallUpdate
} from '../../../../series_list/';

export default () => (
    <React.Fragment>
        <div className="series-small-container series-small-container--desktop">
            <DesktopSmallUpdate title="Popular Series (ORDER BY NAME)" query={{
                       collection: 'series',
                       name: '',
                       order: 'name'
                 }}
             />
        </div>
        <div className="series-medium-container series-medium-container--desktop">
            <DesktopMediumUpdate  title="Series (ORDER BY UPLOAD)" query={{
                    collection: 'series',
                    name: '',
                    order: 'update'
                }}
            />
        </div>
    </React.Fragment>
);
