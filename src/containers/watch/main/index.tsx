import * as React from 'react';
import {
    connect
} from 'react-redux';

import Description from '../description/';
import Episodes from '../episodes/';
import Navigation from '../navigation/';
import Player from '../player/';

import {
    IProps
} from './interface/';

const layout = (props: IProps) => {
    function bookmark() {
        let data: any;

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
                { bookmark() }
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
        navigation: state.watchNavigation
    };
};

export default connect(mapStateToProps)(layout);
