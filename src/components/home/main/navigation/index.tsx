import * as React from 'react';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
    IHomeNavigationState as IState
} from '../../../../interfaces/components/';

import './index.css';

export default class HomeNavigationComponent extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            open: false
        };

        this.openNavigation = this.openNavigation.bind(this);
    };
    public openNavigation() {
        this.setState(prevState => ({
                ...prevState,
                open: !prevState.open
            })
        );
    };
    public render() {
        return(
            <nav className={`home-navigation ${this.state.open? 'home-navigation--open':''}`}>
                <span className="home-navigation__button-container" onClick={ this.openNavigation }>
                    <FontAwesomeIcon className="home-navigation__button" icon="ellipsis-h" />
                </span>
                <ul className="home-navigation__ul">
                    <li className="navigation--up">
                        <span>
                            <FontAwesomeIcon icon="arrow-circle-up" />
                        </span>
                    </li>
                    <li className="navigation--down">
                        <span>
                            <FontAwesomeIcon icon="arrow-circle-down" />
                        </span>
                    </li>
                </ul>
            </nav>
        );
    };
};
