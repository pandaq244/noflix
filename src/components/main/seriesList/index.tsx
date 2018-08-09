import * as Firebase from 'firebase';
import * as React from 'react';

import ListItem from './list';

import './index.css'

interface IProps{
    listClass: string[],
    query: {
        collection: string,
        count: number
    }
}

interface IState{
    readonly list: any[]
}

Firebase.initializeApp({
    apiKey: "AIzaSyDBsadU_uGC9ewUauw1LpSZWLvH9JJ6BO0",
    authDomain: "noflix-b9334.firebaseapp.com",
    databaseURL: "https://noflix-b9334.firebaseio.com",
    messagingSenderId: "486157692122",
    projectId: "noflix-b9334",
    storageBucket: "noflix-b9334.appspot.com"
});

class SeriesList extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state={
            list: []
        };
    };
    public componentDidMount() {    
        const firestore=Firebase.firestore();

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

export default SeriesList;