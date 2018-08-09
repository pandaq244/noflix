import * as React from 'react';

import SeriesList from '../seriesList';

interface IProps{
    title: string,
    query: string
}

class SmallUpdate extends React.Component<IProps> {
    public render() {      
        return(
            <React.Fragment>
                <span className="">
                    {this.props.title}
                </span>
                <SeriesList listClass={[]} query={{
                    collection: this.props.query,
                    count: 7
                }} />
            </React.Fragment>
        );
    };
};

export default SmallUpdate;