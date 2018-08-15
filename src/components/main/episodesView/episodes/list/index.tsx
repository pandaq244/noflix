import * as React from 'react';
import { connect } from 'react-redux';

import CreateLi from './li';

interface IProps {
    elements: any[],
    index: number,
    series: any
};

interface IState {
    episodes: any[]
};

class EpisodeNav extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            episodes: []
        };
    };
    public componentDidMount() {
        const list: any[] = [];

        this.props.elements
            .forEach((element: any, index: number) => {
                list.push(
                    <CreateLi key={`arrayOf${this.props.index}Episode${index}`} id={element.id} season={this.props.index} episode={index+1} />
                );
            });

        this.setState({
            episodes: list
        });
    };
    public render() {
        return(
            <li>
                <span className="series-season--number">Season {this.props.index}</span>
                <ul className="series-episodes__list">
                    {this.state.episodes}
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

export default connect(mapStateToProps)(EpisodeNav);