import * as React from 'react';

import SeriesList from '../seriesList'; 

import leftArrow from './left_arrow.png';
import rightArrow from './right_arrow.png';

import './index.css';

interface IProps{
    name: string,
    query: string
};

export default class MediumUpdate extends React.Component<IProps> {
    public render() {
        return(
            <React.Fragment>
                <span className="">{this.props.name} List</span>
                <div className="series-bar-container">
                    <div className="series-bar-container__button series-bar-container__button--prev">
                        <img src={leftArrow} alt="next-page" />
                    </div>
                    <SeriesList 
                        listClass={["series-bar-container__list"]} 
                        query={{
                            collection: this.props.query,
                            count: 6,
                            order: 'update' 
                        }} 
                    />
                    <div className="series-bar-container__button series-bar-container__button--next series-bar-container__button--active" >
                        <img src={rightArrow} alt="next-page" />
                    </div>
                </div>
            </React.Fragment>
        );
    };
};