import * as React from 'react';

import * as firebase from 'firebase';
import firebaseConf from '../../../firebase.config';

import ListItem from './list';

import './index.css'

interface IProps{
    listClass: string[],
    query: {
        collection: string,
        count: number
    }
};

interface IState{
    list: any[]
};

export default class SeriesList extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state={
            list: []
        };
    };
    public componentDidMount() {    
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConf);
        };
    
        const firestore=firebase.firestore();

        const seriesRef=firestore.collection(this.props.query.collection);

        seriesRef
            .limit(this.props.query.count)
            .get()
            .then(querySnapchats => {
                const documents: object[]=[];
                querySnapchats.forEach(doc => {
                    documents.push({
                        data: doc.data(),
                        id: doc.id
                    });
                });
                return documents;
            })
            .then(data => {
                this.setState({
                    list: data
                });
            });   
    };
    public renderList() {
        return this.state.list.map((element: any, index: number) => {
            return <ListItem 
                key={element.id} 
                link={element.id}
                name={element.data.name}
                preview={element.data.preview}
            />
        });
    };
    public render() {     
        return(
            <ul className={`element-list ${this.props.listClass.join(' ')}`}>
               {this.renderList()}
            </ul> 
        );
    };
};