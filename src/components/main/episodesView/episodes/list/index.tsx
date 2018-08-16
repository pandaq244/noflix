import * as React from 'react';
import { connect } from 'react-redux';

import { episodeQuery } from '../../../../../api/query';

import CreateLi from './li/';

interface IProps {
    index: number,
    series: any
};

interface IState {
    render: any[],
    episodes: any[]
};

class EpisodeNav extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            episodes: [],
            render: []
        };
    };
    public async componentDidMount() {
        if(this.props.index === this.props.series.seasonNumber){
            const episodes=this.props.series.episodes[this.props.series.seasonNumber]
                .map(async (element: any) => {
                    return episodeQuery(element.id);
                });
            const season=await Promise.all(episodes);

            this.setState({
                episodes: season
            });
        };
        const list: any[] = [];

        this.state.episodes
            .forEach((element: any, index: number) => {
                list.push(
                    <CreateLi key={`arrayOf${this.props.index}Episode${index}`} id={element.id} season={this.props.index} episode={index+1} />
                );
            });

        this.setState(prevState => ({
            ...prevState,
            render: list
        }));
    };
    public render() {
        return(
            <li>
                <span className="series-season--number">Season {this.props.index}</span>
                <ul className="series-episodes__list">
                    {this.state.render}
                </ul>
            </li>
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
        update: (data: any) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeNav);