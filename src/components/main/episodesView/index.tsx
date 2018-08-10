import * as React from 'react';

import * as firebase from 'firebase';
import firebaseConf from '../../../firebase.config';

import './index.css';

interface IProps {
    name: string
}

interface IState {
    episode: any,
    data: any
}

class EpisodeView extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            data: {},
            episode: this.props
        };
    };
    public componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConf);
        };

        const firestore=firebase.firestore();

        const seriesRef=firestore.collection('series');

        seriesRef
            .doc(this.state.episode.match.params.name)
            .get()
            .then(doc => {
                this.setState({
                    data: doc.data()
                });
                return doc;
            })
            .then((data) => {
                console.log(data.data())
            });
    };
    public render() {  
        return(
            <main className="main-app main-series-info"> 
                <div />
                <div />
                <div />
                <div className="player-container">
                    <iframe className="player-frame" src="https://openload.co/embed/WLYtmM73GNY" />
                </div>
                <ul className="series-nav">
                    <li>Overview</li>
                    <li>Episodes</li>
                    <li>More like this</li>
                    <li>Details</li>
                </ul>
            </main>
        );
    };
};

export default EpisodeView;
