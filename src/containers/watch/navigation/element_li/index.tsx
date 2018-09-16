import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    updateBookmark
} from '../../../../ducks/watch_navigation';

import {
    IProps
} from './interface/';

 const renderElement = (props: IProps) => {
    function update() {
        props.setBookmark(props.index);
    };
    return(
        <li>
            <span className={ props.navigation.bookmark === props.index? 'series-nav--active':'' } onClick={ update } >
                { props.value }
            </span>
        </li>
    );
};
const mapStateToProps = (state: any) => {
    return {
        navigation: state.watchNavigation
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setBookmark: (data: any) => dispatch(updateBookmark(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(renderElement);
