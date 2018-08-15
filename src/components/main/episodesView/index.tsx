import * as React from 'react';
import { connect } from 'react-redux';

import Description from './description';
import Episodes from './episodes';

import NavLi from './nav';

import { episodeQuery, seriesDocQuery, sourceQuery } from  '../../../api/query';

import './index.css';

interface IProps {
    episode: any,
    series: any,
    seriesNav: any,
    id: string,
    updateEpisode: any,
    updateSeries: any
};

interface IState {
    seriesId: any,
    
};

class EpisodeView extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props);
        
        this.state={ 
            seriesId: this.props
        };    
    };
    public createNav(data: string[]=this.props.seriesNav.options) {
        return data.map((element: string, index: number) => {
                return <NavLi key={element+index} value={element} index={index} />
            });
    };
    public async componentDidMount() {
        const { id } = this.state.seriesId.match.params;

        const querySeries = Object(await seriesDocQuery(id));
        const seriesData = querySeries.data();
     

        const queryEpisode = await episodeQuery(
            seriesData.episodes[this.props.series.seasonNumber][this.props.series.episodeNumber-1].id
        );
        const episodeData = Object(queryEpisode).data();

        const querySource = await sourceQuery(
            episodeData.source.id
        );
        const sourceData = Object(querySource).data()

        this.props.updateSeries({
            description: seriesData.description,
            episodes: seriesData.episodes,
            id: querySeries.id,
            name: seriesData.name
        });
        
        this.props.updateEpisode({
            description: episodeData.description,
            name: episodeData.name,
            source: sourceData.source
        });
    };
    public leftPanel() {
        let data: any=null;
        switch(this.props.seriesNav.bookmark) {
            case 0: 
                data=<Description />
                break;
            case 1:
                data=<Episodes />
                break;
        };
        return data;
    };
    public render() {  
        return(
            <main className="main-app main-series-info"> 
                <div className="series-top-bar"/>
                <div className="series-description-container">
                    {this.leftPanel()}
                </div>
                <div className="player-container">
                    <iframe className="player-frame" src={this.props.episode.source} />
                </div>
                <ul className="series-nav">
                    {this.createNav()}
                </ul>
            </main>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode,
        series: state.series,
        seriesNav: state.seriesNav
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