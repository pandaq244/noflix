import * as React from 'react';

import SmallUpdate from '../../default/';

import {
    IAllUpdateDeviceProps as IProps
} from '../../../../../../interfaces/components/';

export default (props: IProps) => (
    <SmallUpdate classList="element-list--mobile" title={props.title} query={{
            collection: props.query.collection,
            count: 1,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
