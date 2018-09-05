import * as React from 'react';

import {
    RenderSeriesList
} from '../../render/';

import {
    IAllUpdateProps as IProps
} from '../../../../../interfaces/components/';

import './index.css';

export default class SmallUpdate extends React.Component<IProps> {
    public render() {
        return(
            <React.Fragment>
                <span className="series-list-title__span">
                    {this.props.title}
                </span>
                <RenderSeriesList classList={this.props.classList} query={{
                         collection: this.props.query.collection,
                         count: this.props.query.count,
                         name: this.props.query.name,
                         order: this.props.query.order,
                         type: 0
                    }}
                />
            </React.Fragment>
        );
    };
};
