import * as React from 'react';

import SeriesList from '../seriesList'; 

import leftArrow from './left_arrow.png';
import rightArrow from './right_arrow.png';

import './index.css';

interface IProps{
    name: string,
    query: string
};

class MediumUpdate extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return(
            <React.Fragment>
                <span className="">{this.props.name} List</span>
                <div className="series-container">
                    <div className="series-container__button series-container__button--prev">
                        <img src={leftArrow} alt="next-page" />
                    </div>
                    <SeriesList listClass={[
                        "series-container__list",
                        "series-container__list--medium"
                    ]} query={{
                       collection: this.props.query,
                       count: 6 
                    }} />
                    <div className="series-container__button series-container__button--next" >
                        <img src={rightArrow} alt="next-page" />
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default MediumUpdate;