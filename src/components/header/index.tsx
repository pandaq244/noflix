import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class Header extends React.Component {
    public render() {
        return(
            <React.Fragment>
                <Link to="/">
                    <img className="page-logo" src="" alt="page-logo" />
                </Link>
                <ul className="page-navigation">
                    <li>
                        <Link to="/series">Series</Link>
                    </li>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                </ul>
                <ul className="page-navigation page-navigation--right">
                    <li>
                        <form name="" action="" method="">
                            <input className="search__input" type="text" name="" placeholder="Search.." />
                        </form>
                    </li>
                    <li>
                        {/* user todo */}
                        pandaq244
                    </li>
                </ul>
            </React.Fragment>
        );
    };
};