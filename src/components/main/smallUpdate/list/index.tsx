import * as React from 'react';
import { Link } from 'react-router-dom';

interface IListItem{
    name: string,
    img: string
}
export default function ListItem(props: IListItem){
    return(
        <li className="series__li">
            <Link to="/watch">
                <img src={props.img} alt="series-preview" />
                <span className="series__li-title">
                   {props.name}
                </span>
            </Link>
        </li>
    );
};