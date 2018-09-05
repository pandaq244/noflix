import * as React from 'react';
import {
    connect
} from 'react-redux';

import {
    IWatchUpdateNavigationBookmark as IUpdateBookmark
} from '../../../../../interfaces/redux/';

import {
    IWatchNavigationLiProps as IProps
} from '../../../../../interfaces/components/';

 const createLi = (props: IProps) => {
    function update() {
        props.updateBookmark({
            id: props.index
        });
    }
    return(
        <li>
            <span className={props.navigation.bookmark === props.index? 'series-nav--active':''} onClick={update} >
                {props.value}
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
        updateBookmark: (data: IUpdateBookmark) => {
            dispatch({
                payload: data.id,
                type: '@@watch_navigation/UPDATE_BOOKMARK'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(createLi);
