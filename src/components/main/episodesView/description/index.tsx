import * as firebase from 'firebase';
import * as React from 'react';

import firebaseConf from '../../../../firebase.config';

import './index.css';

interface IProps {
    data: string,
    episodeNumber: number,
    seasonNumber: number
};

interface IState {
    episodeName: string,
    seriesDescription: string,
    seriesName: string,
    query: any
};

export default class SeriesDescription extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            episodeName: 'seriously',
            query: null,
            seriesDescription: 'IDIOT',
            seriesName: 'I dont know'
        };
    };
    public componentDidMount() {
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConf);
        };
        
        firebase
            .firestore()
            .collection('series')
            .doc(this.props.data)
            .get()
            .then(snap => {
                const data=Object(snap.data());
                
                this.setState({
                    query: snap.data()
                });
                
               return {
                   episode: this.state.query.episodes[this.props.seasonNumber-1][this.props.episodeNumber-1].id,
                   props: data
               };
            })
            .then(data => {
                firebase
                    .firestore()
                    .collection('episode')
                    .doc(data.episode)
                    .get()
                    .then(snap => {
                        const dataE=Object(snap.data());

                        this.setState({
                            episodeName: dataE.name,
                            seriesDescription: data.props.description,
                            seriesName: data.props.name
                        });
                    });
            });

    };
    public render() {
        return(
            <div className="series-description">
                <span className="series-description--title">
                  {this.state.seriesName}
                </span>
                <div className="series-description--summary">
                    <span className="">Season {this.props.seasonNumber},</span>
                    <span className="">Episode :{this.props.episodeNumber}</span>
                    <span className="">"{this.state.episodeName}"</span>
                </div>
                <div className="">
                   {this.state.seriesDescription}
                </div>
            </div>
        );
    };
};