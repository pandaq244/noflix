import * as React from 'react';

import leftArrow from './left_arrow.png';
import rightArrow from './right_arrow.png';

interface IProps{
    name: string
};

class SeriesUpdate extends React.Component<IProps> {
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
                    <ul className="series-container__list">
                        {this.props.name}
                    </ul>
                    <div className="series-container__button series-container__button--next" >
                        <img src={rightArrow} alt="next-page" />
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default SeriesUpdate;