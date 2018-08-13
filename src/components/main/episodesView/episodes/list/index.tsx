import * as React from 'react';

interface IProps {
    value: string
};

export default (props: IProps) => {
    return(
        <li>{props.value}</li>
    );
};