import * as React from 'react';

import './index.css';

export default class SearchView extends React.Component {
    public componentWillMount() {
        document.title='NoSearch';
    };
    public render() {
        return(
            <main className="main-app main-search"> 
                <h4 className="searches-title">YOUR SEARCHES</h4>
                <ul className="element-list series-search-container">
                    <li className="series__li">
                        
                            <img src='' alt="series-preview" />
                            <div className="series__li-title">
                                <span>sadsadsad</span>
                            </div>
                    
                    </li>
                </ul>
            </main>
        );
    };
};

