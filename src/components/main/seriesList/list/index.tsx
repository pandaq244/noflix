import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps{
    name: string,
    preview: string
}

export default function ListItem(props: IProps){
    return(
        <li className="series__li">
            <Link to="/watch">
                <img src={props.preview} alt="series-preview" />
                <div className="series__li-title">
                   <span>{props.name}</span>
                </div>
            </Link>
        </li>
    );
};