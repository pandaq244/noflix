import * as React from 'react';

import Description from './description';
import Episodes from './episodes';

import NavLi from './nav';

import './index.css';

interface IProps {
    name: string
};

interface IState {
    series: any,
    data: any,
    nav: {
        bookmark: number
        list: string[]
    }
};

export default class EpisodeView extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            data: {},
            nav: {
                bookmark: 0,
                list: [
                    'Overview',
                    'Episodes',
                    'More like this',
                    'Details',
                ]
            },
            series: {
                episode: 1,
                id: this.props,
                season: 1
            }
        };
        this.changeNav=this.changeNav.bind(this);
    };
    public changeNav(index: number) {
        this.setState(prevState => ({
            nav: {
                ...prevState.nav,
                bookmark: index
            }
        }));
    };
    public createNav(data: any[]) {
        const bookmark=this.state.nav.bookmark;

        return data.map((element: string, index: number) => {
            return <NavLi 
                key={element+index} 
                name={element} 
                condition={index===bookmark?'series-nav--active':''}
                changeNav={this.changeNav} 
                index={index}
            />
        });
    };
    public renderLeftPanel() {
        let data: any=null;
        switch(this.state.nav.bookmark) {
            case 0: 
                data=<Description 
                    data={this.state.series.id.match.params.name} 
                    episode={this.state.series.episode} 
                    season={this.state.series.season}
                />
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
                    {this.renderLeftPanel()} 
                </div>
                <div className="player-container">
                    <iframe className="player-frame" src="https://openload.co/embed/WLYtmM73GNY" />
                </div>
                <ul className="series-nav">
                    {this.createNav(this.state.nav.list)}
                </ul>
            </main>
        );
    };
};
