import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    IProps
} from './interface/';

import './style/index.css';

const watchDescription = (props: IProps) => (
    <div className="series-description">
        <span className="series-description--title">
          { props.series.name }
        </span>
        <div className="series-description--summary">
            <div className="">
                <span className="episode-description-field">Season</span>
                <span className="episode-description-value">
                    { props.series.seasonNumber }
                </span>
            </div>
            <div className="">
                <span className="episode-description-field">Episode</span>
                <span className="episode-description-value">
                    { props.series.episodeNumber }
                </span>
            </div>
            <div className="">
                <span className="episode-description-name">
                    { props.episode.name }
                </span>
            </div>
        </div>
        <div className="">
            <span className="episode-description-field">
                Episode Description
            </span>
            <span className="">
                { props.episode.description }
            </span>
        </div>
        <div className="">
            <span className="episode-description-field">
                Series Description
            </span>
            <span className="">
                { props.series.description }
            </span>
        </div>
    </div>
);

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode,
        series: state.series
    };
};

export default connect(mapStateToProps)(watchDescription);
