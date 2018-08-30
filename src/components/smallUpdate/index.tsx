import * as React from 'react';

import SeriesList from '../seriesList';

import './index.css';

import {
    IAllUpdateProps as IProps
} from '../../interfaces/components/';

export default class SmallUpdate extends React.Component<IProps> {
    public render() {
        return(
            <React.Fragment>
                <span className="">
                    {this.props.title}
                </span>
                <SeriesList
                    listClass=""
                    query={{
                         collection: this.props.query,
                         count: 7,
                         name: '',
                         order: 'name',
                         type: 0
                    }}
                />
            </React.Fragment>
        );
    };
};
