import * as React from 'react';
import {
    NavLink,
    Redirect
 } from 'react-router-dom';

import {
    IState
} from '../interface/';

import './style/index.css';

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
            <header className="header desktop-header">
                <NavLink to="/">
                    <img className="page-logo" src="" alt="page-logo" />
                </NavLink>
                <ul className="page-navigation desktop-navigation">
                    <li>
                        <NavLink to="/series" activeClassName="page-naviagtion__a--open">Series</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films" activeClassName="page-naviagtion__a--open">Films</NavLink>
                    </li>
                </ul>
                <ul className="page-navigation desktop-navigation--right">
                    <li>
                        <form onSubmit={this.handleSubmit} action="/search" >
                            <input onChange={this.handleChange} id="search__input" className="search__input" type="text" name="search" placeholder="ENTER UR DREAM" disabled={true} />
                            { this.state.redirect }
                        </form>
                    </li>
                    <li>pandaq244</li>
                </ul>
            </header>
        );
    };
};
