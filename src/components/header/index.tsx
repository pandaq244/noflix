import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

interface IState {
    redirect: any,
    value: string
};

export default class Header extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            redirect: null,
            value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    
    public handleSubmit(e: any) {
        e.preventDefault();
        // redirect here       
    };
    public handleChange(e: any) {
        this.setState({
            value: e.target.value
        });
    };
    public render() {
        return(
            <React.Fragment>
                <NavLink to="/">
                    <img className="page-logo" src="" alt="page-logo" />
                </NavLink>
                <ul className="page-navigation">
                    <li>
                        <NavLink to="/series" activeClassName="page-naviagtion__a--open">Series</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films" activeClassName="page-naviagtion__a--open">Films</NavLink>
                    </li>
                </ul>
                <ul className="page-navigation page-navigation--right">
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} id="search__input" className="search__input" type="text" name="" placeholder="SEARCH OPTION SOON.." disabled={true} />
                            {this.state.redirect}
                        </form>
                    </li>
                    <li>pandaq244</li>
                </ul>
            </React.Fragment>
        );
    };
};