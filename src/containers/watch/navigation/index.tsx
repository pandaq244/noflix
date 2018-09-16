import * as React from 'react';
import {
    connect
} from 'react-redux';

import NavLi from './element_li/';

import {
    IProps
} from './interface/';

const WatchNavigation = (props: IProps) => {
    function renderNavigation() {
        let navigation: any[] = [];

        navigation = props.navigation.options
            .map((element: string, index: number) => {
                return <NavLi key={ Math.random() } value={ element } index={ index } />;
            });
        return navigation;
    };
    return(
        <ul className="series-nav">
            { renderNavigation() }
        </ul>
    );
};

const mapStateToProps = (state: any) => {
    return {
        navigation: state.watchNavigation
    };
};

export default connect(mapStateToProps)(WatchNavigation);
