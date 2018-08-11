import * as React from 'react';

import * as firebase from 'firebase';
import firebaseConf from '../../../firebase.config';

import NavLi from './nav';

import Description from './description';

import './index.css';

interface IProps {
    name: string
}

interface IState {
    episode: any,
    data: any,
    nav: object[]
};

class EpisodeView extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props);
        this.handler=this.handler.bind(this)
        this.state={
            data: {},
            episode: this.props,
            nav: [
                {name: 'Overview', condition: true},
                {name: 'Episodes', condition: false},
                {name: 'More like this', condition: false},
                {name: 'Details', condition: false}
            ]
        };
    };
    public handler(e: any) {
        console.log(e)
    };
    public createNav(data: object[]) {
        return data.map((element: any) => {
            return <NavLi key={element}  name={element} condition={element.condition} handler={this.handler} />
        });
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
                <div className="series-top-bar"/>
                <div className="series-description-container" >
                    <Description name="Dr House" description={this.state.data.description} data={{
                        episode: 1,
                        name: 'Anyone lie',
                        season: 1
                    }}/>
                </div>
                <div className="player-container">
                    <iframe className="player-frame" src="https://openload.co/embed/WLYtmM73GNY" />
                </div>
                <ul className="series-nav">
                    {/* test */}
                    <NavLi key={'111'}  name={'Overview'} handler={this.handler} condition={true}/>
                </ul>
            </main>
        );
    };
};

export default EpisodeView;
