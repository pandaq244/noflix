import * as React from 'react';

interface IProps {
    condition: boolean,
    name: string,
    handler: any
};

export default (props: IProps) => {
    return(
        <li>
            <span className={props.condition? 'series-nav--active':''} onClick={props.handler}>
                {props.name}
            </span>
        </li>
    );
};