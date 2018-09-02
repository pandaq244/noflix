import * as React from 'react';
import {
    NavLink,
    Redirect
} from 'react-router-dom';

import {
    IHeaderContainerState as IState
} from '../../../../../interfaces/containers/';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import './index.css';

export default class DesktopHeader extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fire: false,
            redirect: null,
            value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    public handleSubmit(e: any) {
        e.preventDefault();
    };
    public handleChange(e: any) {
        this.setState({
            value: e.target.value
        }, () => {
            this.redirect();
        });
    };
    public redirect() {
        this.setState({
            redirect: <Redirect to={`/search/${this.state.value}`} />
        });
    };
    public render() {
        return(
            <header className="header mobile-header">
                <ul className="page-navigation mobile-navigation">
                    <li>
                        <NavLink to="/" activeClassName="page-naviagtion__a--open">
                            <FontAwesomeIcon icon="home" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/series" activeClassName="page-naviagtion__a--open">
                            <FontAwesomeIcon icon="folder" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/films" activeClassName="page-naviagtion__a--open">
                            <FontAwesomeIcon icon="comment" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" activeClassName="page-naviagtion__a--open">
                            <FontAwesomeIcon icon="search" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" activeClassName="page-naviagtion__a--open">
                            <FontAwesomeIcon icon="user-circle" />
                        </NavLink>
                    </li>
                </ul>
            </header>
        );
    };
};
