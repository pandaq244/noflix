import * as React from 'react';
import { connect } from 'react-redux';

import Description from './description';
import Episodes from './episodes';

import NavLi from './nav';

import { seriesQuery } from  '../../../api/query';

import './index.css';

interface IProps {
    episode: any,
    series: any,
    seriesNav: any,
    id: string,
    updateSeries: any,
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
    public async componentWillMount() {
        const { id } = this.state.seriesId.match.params;

        const queryData=Object(await seriesQuery(id));
        const data=queryData.data();
        
        this.props.updateSeries({
            description: data.description,
            episodes: data.episodes,
            id: queryData.id,
            name: data.name
        });
    };
    public leftPanel() {
        let data: any=null;
        switch(this.props.seriesNav.bookmark) {
            case 0: 
                data=<Description />
                break;
            case 1:
                data=
                    <Episodes 
                        data={this.state.seriesId.match.params.id} 
                        episodeNumber={0} 
                        seasonNumber={0}
                    />
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