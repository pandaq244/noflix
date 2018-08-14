import * as firebase from 'firebase';
import * as React from 'react';

import firebaseConf from '../../../../firebase.config';

import EpisodeLi from './list';

import './index.css';

interface IProps {
    data: string,
    episodeNumber: number,
    seasonNumber: number
};

interface IState {
    episodeNumber: number,
    episodes: object[],
    query: any,
    seasonNumber: number,
    source: string
};

export default class EpisodesList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            episodeNumber: this.props.episodeNumber,
            episodes: [],
            query: null,
            seasonNumber: this.props.seasonNumber,
            source: '',
        };
        console.log('aaa')
    };
    public getEpisodes(docId: any) {
        return new Promise((resolve, reject) => {
            firebase
                .firestore()
                .collection('episode')
                .doc(docId)
                .get()
                .then(snap => {
                    resolve(snap.data());
                })
                .catch(error => reject(error));
        });
    };
    public renderEpisodes(episodes: any[]) {
        const layout: any[]=[];

        episodes
            .forEach((element: any) => {
                layout.push(<EpisodeLi key={element} value={element.name} />);
            });

        return layout;
    };
    public componentDidMount() {
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConf);
        };
        const firestore=firebase.firestore();

        firestore
            .collection('series')
            .doc(this.props.data)
            .get()
            .then(snap => {
                this.setState({
                    query: snap.data()
                });

               return this.state.query.episodes[this.props.seasonNumber-1];
            })
            .then(async data => {
                const episodes=data.map((element: any) => {
                    return this.getEpisodes(element.id);
                });
             
                return await Promise.all(episodes);
            })
            .then(episodes => {
                this.setState({
                    episodes
                });
            });
    };
    public render() {
        return(
            <div className="series-episode-container">
                <h2>PICK UR EPISODE</h2>
                <ul className="series-season__list">
                    <li>
                        <span className="series-season--number">Season 1</span>
                        <ul className="series-episodes__list">
                            {this.renderEpisodes(this.state.episodes)}
                        </ul>
                    </li>
                    <li className="series-season__list">
                        <span className="series-season--number">Season 2</span>
                    </li>
                    <li className="series-season__list">
                        <span className="series-season--number">Season 3</span>
                    </li>
                    <li className="series-season__list">
                        <span className="series-season--number">Season 4</span>
                    </li>
                </ul>
            </div>
        );
    };
};