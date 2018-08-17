import * as React from 'react';

import { seriesListQuery } from '../../../api/query/';

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
    list: any
};

export default class SeriesList extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state={
            list: []
        };
    };
    public async componentDidMount() {    
        const seriesQuery = await seriesListQuery({
            limit: this.props.query.count,
            type: this.props.query.collection
        }); 
        
        this.setState({
            list: seriesQuery
        });
    };
    public renderList() {
        return this.state.list.map((element: any, index: number) => {
            return <ListItem key={element.id} link={element.id} name={element.data.name}preview={element.data.preview} />;
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