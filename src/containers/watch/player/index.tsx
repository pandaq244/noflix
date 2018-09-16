import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    IProps
} from './interface/';

const player = (props: IProps) => (
    <iframe className="player-frame" src={ props.episode.source } />
);

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode
    };
};

export default connect(mapStateToProps)(player);
