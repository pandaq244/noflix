import * as React from 'react';

import MediumUpdate from '../index/';

import {
    IAllUpdateDeviceProps as IProps
} from '../../../../../interfaces/components/';

export default (props: IProps) => (
    <MediumUpdate classList="element-list--desktop" title={props.title} query={{
            collection: props.query.collection,
            count: 6,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
