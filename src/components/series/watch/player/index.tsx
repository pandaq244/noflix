import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    IWatchPlayerProps as IProps
} from '../../../../interfaces/components';

const WatchPlayer = (props: IProps) => {
    return(
        <iframe className="player-frame" src={props.episode.source} />
    );
};

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode
    };
};

export default connect(mapStateToProps)(WatchPlayer);
