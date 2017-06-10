import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '/imports/store';

import { MainLayoutComponent } from '/imports/ui/components/layouts/MainLayoutComponent';
import { HomePageContainer } from '/imports/ui/containers/pages/HomePageContainer';
import { ItemsPageContainer } from '/imports/ui/containers/pages/ItemsPageContainer';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router>
      <MainLayoutComponent>
        <Switch>
          <Route path="/items" component={ItemsPageContainer} />
          <Route path="/" component={HomePageContainer} />
        </Switch>
      </MainLayoutComponent>
    </Router>
  </Provider>
);
