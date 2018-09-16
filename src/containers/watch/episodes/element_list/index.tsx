import * as React from 'react';
import {
    connect
} from 'react-redux';

import OpenLi from './element_open/';

import {
    IProps,
    IState
} from './interface/';

import {
    updateNumber
} from '../../../../ducks/series/';

class EpisodeNav extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            render: []
        };

        this.update = this.update.bind(this);
    };
    public async componentWillMount() {
        if(this.props.index === this.props.series.seasonNumber){
            this.setState({
                render: <OpenLi index={this.props.index} />
            });
        };
    };
    public update() {
        this.props.update({
            episodeNumber: 1,
            seasonNumber: this.props.index
        });
    };
    public render() {
        return(
            <li>
                <span onClick={this.update} className="series-season--number">Season {this.props.index}</span>
                {this.state.render}
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
        update: (data: any) => dispatch(updateNumber(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeNav);
