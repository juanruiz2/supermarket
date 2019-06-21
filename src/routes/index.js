// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Componentes
import App from '../components/App';
import Home from '../components/Home';
import Item from '../components/Item';
import NotFound from '../components/NotFound'

const AppRoutes = () =>
<App>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/items" component={Item} />
    {/* <Route path="/" component={Home} /> */}
    <Route component={NotFound} />
  </Switch>
</App>

export default AppRoutes;