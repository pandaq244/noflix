import * as React from 'react';
import { connect } from 'react-redux';

import {
    IUpdateNavigationBookmark
} from '../../../../interfaces/redux/';

import {
    IWatchNavigationLiProps as IProps
} from '../../../../interfaces/components/';

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
        navigation: state.navigation
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateBookmark: (data: IUpdateNavigationBookmark) => {
            dispatch({
                payload: data.id,
                type: '@@navigation/UPDATE_BOOKMARK'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(createLi);
