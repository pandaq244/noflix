import * as React from 'react';
import {
    connect
} from 'react-redux';

import CreateList from './list';

import {
    IWatchEpisodesIndexProps as IProps,
    IWatchEpisodesIndexState as IState
} from '../../../interfaces/components/';

import './index.css';

class EpisodesList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            episodes: []
        };
    };
    public renderSeasons() {
        const list: any[]=[];

        Object.keys(this.props.series.episodes)
            .forEach((element: string, index: number) => {
                list.push(<CreateList key={Math.random()}  index={index+1} />);
            });

        return list;
    };
    public render() {
        return(
            <div className="series-episode-container">
                <h2>PICK UR EPISODE</h2>
                <ul className="series-season__list">
                    { this.renderSeasons() }
                </ul>
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

export default connect(mapStateToProps)(EpisodesList);
