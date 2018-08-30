import * as React from 'react';

import { searchQuery, seriesListQuery } from '../../api/query/';

import ListItem from './list';

import './index.css'

import {
    ISeriesListProps as IProps,
    ISeriesListState as IState
} from '../../interfaces/components/';

export default class SeriesList extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            list: []
        };
    };
    public async componentWillMount() {
        let seriesQuery: any;

        switch(this.props.query.type){
            case 0:
                seriesQuery = await seriesListQuery({
                    collection: this.props.query.collection,
                    count: this.props.query.count,
                    order: this.props.query.order
                });
                break;
            case 1:
                seriesQuery = await searchQuery({
                    collection: this.props.query.collection,
                    count: this.props.query.count,
                    name: this.props.query.name,
                    order: this.props.query.order
                });
                break;
        };

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
            <ul className={`element-list ${this.props.listClass}`}>
               {this.renderList()}
            </ul>
        );
    };
};
