import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '/imports/store';

import { MainLayoutComponent } from '/imports/ui/components/layouts/MainLayoutComponent';
import { HomePageContainer } from '/imports/ui/containers/pages/HomePageContainer';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayoutComponent}>
        <IndexRoute component={HomePageContainer}/>
      </Route>
    </Router>
  </Provider>
);
