import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './header';
import StartScreen from './main';
import EpisodeView from './main/episodesView';
import SeriesView from './main/seriesView';

import './index.css';

export default class App extends React.Component {
  public render() {
    return (
        <Router>
            <React.Fragment>
                <header className="header-bar">
                    <Header />
                </header>
                <Switch>
                    <Route exact={true} path="/" component={StartScreen} />
                    <Route exact={true} path="/series/:name" component={EpisodeView}/>
                    <Route exact={true} path="/series" component={SeriesView} />
                </Switch>
            </React.Fragment>
        </Router>
    );
  };
};
