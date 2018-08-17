import * as React from 'react';
import { connect } from 'react-redux';

import Description from '../description/';
import Episodes from '../episodes/';
import Navigation from '../nav/';
import Player from '../player/';

interface IProps {
    navigation: any
};

class EpisodeMain extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };
    public update() {
        let data: any = null;
        
        switch(this.props.navigation.bookmark) {
            case 0: 
                data = <Description />;
                break;
            case 1:
                data = <Episodes />;
                break;
        };  
        return data;
    };
    public render() {
        return(
            <React.Fragment>
                <div className="series-description-container">
                    {this.update()}
                </div>
                <div className="player-container">
                    <Player />
                </div>
                <Navigation />
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        navigation: state.seriesNav
    };
};

export default connect(mapStateToProps)(EpisodeMain);