import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';
import history from '../history';
import StreamHome from "./streams/StreamHome";

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header/>
                    <div className="ui center container">
                        <Switch>
                            <Route path='/' exact component={StreamHome}/>
                            <Route path='/streams/new' exact component={StreamCreate}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default App;