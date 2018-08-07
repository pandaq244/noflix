import * as React from 'react';

import ListItem from './list';

import './index.css';

interface IListItem{
    list: [object]
}
class RecentUpdate extends React.Component<{}, IListItem> {
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
            }
        ];

        const listItems: object[] =data.map((element: any) =>
            <ListItem key={element._id} name={element.name} img={element.img} />
        );
        this.setState({
            list: listItems
        } as IListItem);
    }
    public render() {      
        return(
            <React.Fragment>
                <span className="">Recent Update</span>
                <ul className="element-list">
                    {this.state.list}
                </ul> 
            </React.Fragment>
        );
    };
};

export default RecentUpdate;