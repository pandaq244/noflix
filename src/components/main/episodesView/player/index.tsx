import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
    episode: any
};

const player = (props: IProps) => {
    return(
        <iframe className="player-frame" src={props.episode.source} />
    );
};

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode
    };
};

export default connect(mapStateToProps)(player);