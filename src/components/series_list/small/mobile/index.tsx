import * as React from 'react';

import SmallUpdate from '../../../../containers/series/type/small/';

import {
    IProps
} from '../../interface/';

export default (props: IProps) => (
    <SmallUpdate classList="element-list-small--mobile" title={props.title} query={{
            collection: props.query.collection,
            count: 1,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
