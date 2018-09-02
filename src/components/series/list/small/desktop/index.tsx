import * as React from 'react';

import SmallUpdate from '../index/';

import {
    IAllUpdateDeviceProps as IProps
} from '../../../../../interfaces/components/';

export default (props: IProps) => (
    <SmallUpdate classList="element-list--desktop" title={props.title} query={{
            collection: props.query.collection,
            count: 7,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
