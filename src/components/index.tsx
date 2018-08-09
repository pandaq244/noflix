import * as React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './header';
import StartScreen from './main';
import EpisodeView from './main/episodesView';
import SeriesView from './main/seriesView';

import './index.css';

class App extends React.Component {
  public render() {
    return (
        <Router>
            <React.Fragment>
                <header className="header-bar">
                    {/* more options */}
                    <Header />
                </header>
                <main className="main-app">    
                    <Route exact={true} path="/" component={StartScreen} />
                    <Route exact={true} path="/series" component={SeriesView} />
                    <Route exact={true} path="/series/:id" component={EpisodeView} />
                </main>
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
