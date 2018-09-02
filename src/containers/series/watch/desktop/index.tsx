import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    WatchIndex as Watch
} from '../../../../components/';

import {
    episodeQuery,
    seriesDocQuery,
    sourceQuery
} from  '../../../../api/';

import {
    IEpisode,
    IUpdateSeriesSettings
} from '../../../../interfaces/redux/';

import {
    IWatchContainerProps as IProps
} from '../../../../interfaces/containers/';

import './index.css';

class DesktopWatchScreen extends React.Component<IProps> {
    public async componentWillMount() {
        const { id } = this.props.match.params;

        const querySeries = Object(await seriesDocQuery(id));
        const seriesData = querySeries.data();

        this.props.updateSeries({
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

        this.props.updateEpisode({
            description: episodeData.description,
            name: episodeData.name,
            source: sourceData.source
        });

        document.title = `${this.props.series.name} S${zeroToZero(this.props.series.seasonNumber)}E${zeroToZero(this.props.series.episodeNumber)}`;
    };
    public render() {
        return(
            <main className="main-app main-series-info">
                <div className="series-top-bar"/>
                <Watch />
            </main>
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
        updateEpisode: (data: IEpisode) => {
            dispatch({
                payload: {
                    description: data.description,
                    name: data.name,
                    source: data.source
                },
                type: '@@episode/UPDATE_INFO'
            });
        },
        updateSeries: (data: IUpdateSeriesSettings) => {
            dispatch({
                payload: {
                    description: data.description,
                    episodes: data.episodes,
                    id: data.id,
                    name: data.name
                },
                type: '@@series/UPDATE_SETTINGS'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopWatchScreen);
