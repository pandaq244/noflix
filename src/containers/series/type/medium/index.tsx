import * as React from 'react';

import SeriesList from '../../render/';

import {
    IProps
} from '../interface/';

import './style/index.css';

export default (props: IProps) => (
    <React.Fragment>
        <span className="series-list-title__span">{props.title} List</span>
        <SeriesList classList={props.classList} query={{
                collection: props.query.collection,
                count: props.query.count,
                name: props.query.name,
                order: props.query.order,
                type: 0
            }}
        />
    </React.Fragment>
);
