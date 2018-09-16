import * as React from 'react';

import SmallUpdate from '../../../../containers/series/type/small/';

import {
    IProps
} from '../../interface/';

import './style/index.css';

export default (props: IProps) => (
    <SmallUpdate classList="element-list-small--desktop" title={props.title} query={{
            collection: props.query.collection,
            count: 7,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
