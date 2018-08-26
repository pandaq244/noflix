import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './header/';
import StartScreen from './mainView/';

import EpisodeView from './episodesView/';
import SearchView from './searchView/';
import SeriesView from './seriesView/';

import './index.css';

export default class App extends React.Component {
  public render() {
    // alert('dr house ma dodane kilka odcinkow do bazy');
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <React.Fragment>
                <header className="header-bar">
                    <Header />
                </header>
                <Switch>
                    <Route exact={true} path="/" component={StartScreen} />
                    <Route exact={true} path="/series/:id" component={EpisodeView}/>
                    <Route exact={true} path="/series" component={SeriesView} />
                    <Route exact={true} path="/search/:id" component={SearchView} />
                </Switch>
            </React.Fragment>
        </Router>
    );
  };
};
