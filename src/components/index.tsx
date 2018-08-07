import * as React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './header';
import StartScreen from './main';
import SeriesScreen from'./main/seriesScreen';

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
                    <Route exact={true} path="/series" component={SeriesScreen} />
                </main>
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
