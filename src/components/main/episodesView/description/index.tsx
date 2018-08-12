import * as firebase from 'firebase';
import * as React from 'react';

import firebaseConf from '../../../../firebase.config';

import './index.css';

interface IProps {
    data: string,
    episode: number,
    season: number
};
interface IState {
    description: string,
    name: string
};

export default class SeriesDescription extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state={
            description: 'IDIOT',
            name: 'I dont know'
        };
    };
    public componentDidMount() {
        if (!firebase.apps.length) {
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
                    description: data.description,
                    name: data.name
                });
            });
    };
    public render() {
        return(
            <div className="series-description">
                <span className="series-description--title">
                  {this.state.name}
                </span>
                <div className="series-description--summary">
                    <span className="">Season {this.props.season},</span>
                    <span className="">Episode :{this.props.episode}</span>
                    <span className="">"AnyOne lie"</span>
                </div>
                <div className="">
                   {this.state.description}
                </div>
            </div>
        );
    };
};