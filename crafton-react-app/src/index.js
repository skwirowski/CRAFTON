import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/main.component';
import UserDetails from './components/user.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user/:activeUser" component={UserDetails} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
