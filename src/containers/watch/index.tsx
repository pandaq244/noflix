
import * as React from 'react';
import {
    connect
} from 'react-redux';

import Main from './main/';

import {
    episodeQuery,
    seriesDocQuery,
    sourceQuery
} from  '../../api/';

import {
    updateSettings
} from '../../ducks/series/actions';

import {
    updateEpisode
} from '../../ducks/episode/actions';

import {
    IProps
} from './interface/';

class DesktopWatchScreen extends React.Component<IProps> {
    public async componentWillMount() {

        const querySeries = Object(await seriesDocQuery(this.props.id));
        const seriesData = querySeries.data();

        this.props.setSeries({
            description: seriesData.description,
            episodes: seriesData.episodes,
            id: querySeries.id,
            name: seriesData.name
        });
    };
    public async componentDidUpdate() {

        const queryEpisode = await episodeQuery(
            this.props.series.episodes[this.props.series.seasonNumber][this.props.series.episodeNumber-1].id
        );
        const episodeData = Object(queryEpisode).data();

        const querySource = await sourceQuery(
            episodeData.source.id
        );
        const sourceData = Object(querySource).data()

        this.props.setEpisode({
            description: episodeData.description,
            name: episodeData.name,
            source: sourceData.source
        });

        document.title = `${this.props.series.name} S${zeroToZero(this.props.series.seasonNumber)}E${zeroToZero(this.props.series.episodeNumber)}`;
    };
    public render() {
        return(
            <React.Fragment>
                <div className="series-top-bar" />
                <Main />
            </React.Fragment>
        );
    };
};

const zeroToZero = (data: number) => {
    return data<10? `0${data}`:data;
};

const mapStateToProps = (state: any) => {
    return {
        series: state.series,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setEpisode: (data: any) => dispatch(updateEpisode(data)),
        setSeries: (data: any) => dispatch(updateSettings(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopWatchScreen);
