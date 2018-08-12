import * as React from 'react';

interface IProps {
    name: string,
    changeNav: any,
    condition: string,
    index: number
};

export default (props: IProps) => {
    function changeLink(){
        return props.changeNav(props.index);
    };
    return(
        <li>
            <span className={props.condition} onClick={changeLink}>
                {props.name}
            </span>
        </li>
    );
};