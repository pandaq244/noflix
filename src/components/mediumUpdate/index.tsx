import * as React from 'react';

import SeriesList from '../seriesList';

import {
    IAllUpdateProps as IProps
} from '../../interfaces/components/';

import leftArrow from './left_arrow.png';
import rightArrow from './right_arrow.png';

import './index.css';

export default class MediumUpdate extends React.Component<IProps> {
    public render() {
        return(
            <React.Fragment>
                <span className="">{this.props.title} List</span>
                <div className="series-bar-container">
                    <div className="series-bar-container__button series-bar-container__button--prev">
                        <img src={leftArrow} alt="next-page" />
                    </div>
                    <SeriesList
                        listClass="series-bar-container__list"
                        query={{
                            collection: this.props.query,
                            count: 6,
                            name: '',
                            order: 'update',
                            type: 0
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
