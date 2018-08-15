import * as React from 'react';
import { connect } from 'react-redux';

import './index.css';

interface IProps {
    episode: any,
    series: any
};

class SeriesDescription extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };
    public render() {
        return(
            <div className="series-description">
                <span className="series-description--title">
                  {this.props.series.name}
                </span>
                <div className="series-description--summary">
                    <span className="">Season: {this.props.series.seasonNumber},</span>
                    <span className="">Episode: {this.props.series.episodeNumber}</span>
                    <span className="">"{this.props.episode.name}"</span>
                </div>
                <div className="">
                   {this.props.series.description}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode,
        series: state.series
    };
};

export default connect(mapStateToProps)(SeriesDescription);