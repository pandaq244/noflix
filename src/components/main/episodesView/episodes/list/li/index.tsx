import * as React from 'react';
import { connect } from 'react-redux';

import { episodeQuery, sourceQuery } from '../../../../../../api/query';

interface IProps {
    episode: number,
    season: number,
    updateSeries: any,
    updateEpisode: any,
    id: string
};

interface IState {
    episode: any,
    source: any
};

class EpisodeLi extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            episode: {},
            source: {}
        };
        this.update = this.update.bind(this);
    };
    public async componentDidMount() {
        const queryEpisode = await episodeQuery(
            this.props.id
        );
        const episodeData = Object(queryEpisode).data();

        const querySource = await sourceQuery(
            episodeData.source.id
        );
        const sourceData = Object(querySource).data();

        this.setState({
            episode: episodeData,
            source: sourceData
        });
    };
    public update() {
        this.props.updateSeries({
            episode: this.props.episode,
            season: this.props.season
        });

        this.props.updateEpisode({
            description: this.state.episode.description,
            name: this.state.episode.name,
            source: this.state.source.source
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
        updateEpisode: (data: any) => {
            dispatch({
                payload: {
                    description: data.description,
                    name: data.name,
                    source: data.source
                },
                type: 'updateEpisodeInfo'
            });
        },
        updateSeries: (data: any) => {
            dispatch({
                payload: {
                    episode: data.episode,
                    season: data.season
                },
                type: 'updateSeriesSetings'
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeLi);

