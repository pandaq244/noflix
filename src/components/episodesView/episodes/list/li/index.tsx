import * as React from 'react';
import { connect } from 'react-redux';

import { episodeQuery } from '../../../../../api/query';

interface IProps {
    episode: number,
    season: number,
    updateSeries: any,
    id: string
};

interface IState {
    episode: any
};

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
            episode: this.props.episode,
            season: this.props.season
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

