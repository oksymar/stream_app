import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
import StreamHome from "./streams/StreamHome";

const App = () => {
    return (
        <div className="ui container" >
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={StreamHome}/>
                        <Route path='/streams/new' exact component={StreamCreate}/>
                        <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                        <Route path='/streams/:id' exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;