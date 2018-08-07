import * as React from 'react';

import SeriesList from '../seriesList';

interface IProps{
    title: string
}

class SmallUpdate extends React.Component<IProps> {
    public render() {      
        return(
            <React.Fragment>
                <span className="">
                    {this.props.title}
                </span>
                <SeriesList listClass="" />
            </React.Fragment>
        );
    };
};

export default SmallUpdate;