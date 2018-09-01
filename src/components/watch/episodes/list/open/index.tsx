import * as React from 'react';
import {
    connect
 } from 'react-redux';

import CreateLi from '../li/';

import {
    episodeQuery
} from '../../../../../api/';

import {
    IWatchEpisodesListOpenProps as IProps,
    IWatchEpisodesListOpenState as IState
} from '../../../../../interfaces/components/';

class OpenSeason extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            count: 5,
            index: 0,
            render: []
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    };
    public componentWillMount() {
        this.update();
    };
    public async update() {
        const episodes = this.props.series.episodes[this.props.series.seasonNumber]
            .slice(this.state.index*this.state.count, this.state.index*this.state.count+this.state.count);

        episodes
            .map(async (element: any) => {
                return episodeQuery(element.id);
            });

        const season = await Promise.all(episodes)

        const list: any[] = [];

        season
            .forEach((element: any, index: number) => {

                list.push(
                    <CreateLi key={Math.random()} id={element.id} season={this.props.index} episode={index+1} />
                );
            });

        this.setState({
            render: list
        })
    };
    public increment() {
        if(this.state.index+1*this.state.count >= this.props.series.episodes[this.props.series.seasonNumber].length) {
            return;
        };

        this.setState({
            index: this.state.index+1
        }, () => {
            this.update();
        });
    };
    public decrement() {
        if(this.state.index === 0) {
            return;
        };

        this.setState({
            index: this.state.index-1
        }, () => {
            this.update()
        });
    };
    public render() {
        return(
            <React.Fragment>
                <div onClick={this.decrement} className="episodes-nav__button">Up</div>
                <ul className="series-episodes__list">
                    {this.state.render}
                </ul>
                <div onClick={this.increment} className="episodes-nav__button">Down</div>
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        series: state.series
    };
};

export default connect(mapStateToProps)(OpenSeason);
