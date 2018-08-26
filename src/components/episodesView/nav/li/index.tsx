import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
    value: string,
    index: number,
    navigation: {
        bookmark: number,
        options: string[]
    },
    updateBookmark: any
};

 const createLi = (props: IProps) => {
    function update() {
        props.updateBookmark(props.index);
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
        navigation: state.seriesNav
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateBookmark: (id: number) => {
            dispatch({
                payload: id,
                type: 'updateNavBookmark'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(createLi);