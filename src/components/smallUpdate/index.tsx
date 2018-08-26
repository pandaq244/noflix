import * as React from 'react';

import SeriesList from '../seriesList';

import './index.css';

interface IProps{
    title: string,
    query: string
}

export default class SmallUpdate extends React.Component<IProps> {
    public render() {      
        return(
            <React.Fragment>
                <span className="">
                    {this.props.title}
                </span>
                <SeriesList listClass={[]} query={{
                    collection: this.props.query,
                    count: 7,
                    order: 'name'
                }} />
            </React.Fragment>
        );
    };
};
