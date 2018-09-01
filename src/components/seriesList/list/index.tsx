import * as React from 'react';
import {
    Link
} from 'react-router-dom';

import {
    ISeriesListUlProps as IProps
} from '../../../interfaces/components/';

export default (props: IProps) => {
    return(
        <li className="series__li">
            <Link to={`/series/${props.link}`}>
                <img src={props.preview} alt="series-preview" />
                <div className="series__li-title">
                   <span>{props.name}</span>
                </div>
            </Link>
        </li>
    );
};
