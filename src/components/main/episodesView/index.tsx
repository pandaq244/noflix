import * as React from 'react';
import { connect } from 'react-redux';

import Main from './main/';

import { episodeQuery, seriesDocQuery, sourceQuery } from  '../../../api/query';

import './index.css';

interface IProps {
    series: any,
    id: string,
    updateEpisode: any,
    updateSeries: any
};

interface IState {
    seriesId: any
};

class EpisodeView extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props);
        
        this.state={ 
            seriesId: this.props
        };    
    };
    public async componentWillMount() {
        const { id } = this.state.seriesId.match.params;

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
                <Main />
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
        updateEpisode: (data: any) => {
            dispatch({
                payload: {
                    description: data.description,
                    name: data.name,
                    source: data.source
                },
                type: 'updateEpisodeInfo'
            });
        },
        updateSeries: (data: any) => {
            dispatch({
                payload: {
                    description: data.description,
                    episodes: data.episodes,
                    id: data.id,
                    name: data.name
                },
                type: 'updateSeriesInfo'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeView);