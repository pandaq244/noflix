import * as React from 'react';
import {
    connect
} from 'react-redux';

import NavLi from './li/';

import {
    IWatchNavigationIndexProps as IProps,
    IWatchNavigationIndexState as IState
} from '../../../interfaces/components/';

class EpisodeNavigation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            navigation: []
        };
    };
    public componentWillMount() {
        let navigation: any[] = [];

        navigation = this.props.navigation.options
            .map((element: string, index: number) => {
                return <NavLi key={element+index} value={element} index={index} />
            });

        this.setState({
            navigation,
        });
    };
    public render() {
        return(
            <ul className="series-nav">
                {this.state.navigation}
            </ul>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        navigation: state.navigation
    };
};

export default connect(mapStateToProps)(EpisodeNavigation);
