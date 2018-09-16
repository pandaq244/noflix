import * as React from 'react';

/*import {
    HomeNavigation
} from '../../components/';*/

import {
    IProps
} from './interface/';

export default class AppWrapper extends React.Component<IProps> {
    public componentWillMount() {
        document.title='NoFlix';
    };
    public render() {
        return(
            <main className="main-app">
                <div className={ `app-container ${ this.props.class }` }>
                    { this.props.children }
                    {/*<HomeNavigation />*/}
                </div>
            </main>
        );
    };
};
