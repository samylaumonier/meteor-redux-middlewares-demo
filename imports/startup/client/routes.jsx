import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '/imports/store';

import { MainLayoutComponent } from '/imports/ui/components/layouts/MainLayoutComponent';
import { HomePageContainer } from '/imports/ui/containers/pages/HomePageContainer';
import { ItemsPageContainer } from '/imports/ui/containers/pages/ItemsPageContainer';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayoutComponent}>
        <IndexRoute component={HomePageContainer}/>
        <Route path="items" component={ItemsPageContainer}/>
      </Route>
    </Router>
  </Provider>
);
