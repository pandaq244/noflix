import * as React from 'react';

import ListItem from './list';

import './index.css'

interface IState{
    list: [object]
}

interface IProps{
    listClass?: string
}

class SeriesList extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
    }
    public componentWillMount() {
        const data: object[]=[
            {
                _id: 1,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            },
            {
                _id: 2,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            },
            {
                _id: 3,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            },
            {
                _id: 4,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            },
            {
                _id: 5,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            },
            {
                _id: 6,
                img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a462918225495.5634831cacc19.jpg',
                name: 'dr house'
            }
        ];

        const listItems: object[] =data.map((element: any) =>
            <ListItem key={element._id} name={element.name} img={element.img} />
        );
        this.setState({
            list: listItems
        } as IState);
    }
    public render() {      
        return(
            <ul className={`element-list ${this.props.listClass}`}>
                {this.state.list}
            </ul> 
        );
    };
};

export default SeriesList;