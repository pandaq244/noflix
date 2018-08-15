import * as React from 'react';
import { connect } from 'react-redux';

import CreateList from './list';

import { episodeQuery } from '../../../../api/query';

import './index.css';

interface IProps {
    episode: any,
    series: any
};

interface IState {
    episodes: any[]
};

class EpisodesList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            episodes: []
        };
    };
    public async componentDidMount() {

        const episodes=this.props.series.episodes[this.props.series.seasonNumber]
            .map(async (element: any) => {
                return episodeQuery(element.id);
            });

        const season=await Promise.all(episodes);

        const list: any[]=[];

        Object.keys(season)
            .forEach((element: any, index: number) => {
                list.push(
                    <CreateList key={`arraySeason${index}`} elements={season} index={index+1}/>
                );       
            });

        this.setState({
            episodes: list
        });
    };
    public render() {
        return(
            <div className="series-episode-container">
                <h2>PICK UR EPISODE</h2>
                <ul className="series-season__list">
                    {this.state.episodes}
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

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);