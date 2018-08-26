import * as React from 'react';
import { connect } from 'react-redux';

import Description from '../description/';
import Episodes from '../episodes/';
import Navigation from '../nav/';
import Player from '../player/';

interface IProps {
    navigation: any
};

const episodeMain = (props: IProps) => {
    function update() {
        let data: any = null;
        
        switch(props.navigation.bookmark) {
            case 0: 
                data = <Description />;
                break;
            case 1:
                data = <Episodes />;
                break;
        };  
        return data;
    }
    return(
        <React.Fragment>
            <div className="series-description-container">
                {update()}
            </div>
            <div className="player-container">
                <Player />
            </div>
            <Navigation />
        </React.Fragment>
    );
};

const mapStateToProps = (state: any) => {
    return {
        navigation: state.seriesNav
    };
};

export default connect(mapStateToProps)(episodeMain);