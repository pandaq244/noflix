import * as React from 'react';

import './index.css';

interface IProps {
    name: string,
    description: string,
    data: {
        season: number,
        episode: number,
        name: string
    }
};
export default (props: IProps) => {
    return(
        <div className="series-description">
            <span className="series-description--title">
              {props.name}
            </span>
            <div className="series-description--summary">
                <span className="">Season {props.data.season},</span>
                <span className="">Episode {props.data.episode}:</span>
                <span className="">"{props.data.name}"</span>
            </div>
            <div className="">
                {props.description}
            </div>
        </div>
    );
};