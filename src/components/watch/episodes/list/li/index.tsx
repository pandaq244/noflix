import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    episodeQuery
} from '../../../../../api/';

import {
    IUpdateSeriesEpisode
} from '../../../../../interfaces/redux/';

import {
    IWatchEpisodesListLiProps as IProps,
    IWatchEpisodesListLiState as IState
} from '../../../../../interfaces/components/';

class EpisodeLi extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            episode: {}
        };

        this.update = this.update.bind(this);
    };
    public async componentDidMount() {
        const queryEpisode = await episodeQuery(
            this.props.id
        );
        const episodeData = Object(queryEpisode).data();

        this.setState({
            episode: episodeData
        });
    };
    public update() {
        this.props.updateSeries({
            episodeNumber: this.props.episode,
            seasonNumber: this.props.season
        });
    };
    public render() {
        return(
            <li onClick={this.update}>{this.state.episode.name}</li>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        series: state.series
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateSeries: (data: IUpdateSeriesEpisode) => {
            dispatch({
                payload: {
                    episodeNumber: data.episodeNumber,
                    seasonNumber: data.seasonNumber
                },
                type: '@@series/UPDATE_EPISODE'
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeLi);
