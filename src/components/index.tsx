import * as React from 'react';

import { BaseRouter } from '../routes/';

import Header from '../containers/header/';

import './index.css';

export default class App extends React.Component {
  public render() {
    // alert('dr house ma dodane kilka odcinkow do bazy');
    return(
        <React.Fragment>
            <Header />
            <BaseRouter />
        </React.Fragment>
    );
  };
};
