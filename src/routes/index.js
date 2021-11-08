import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import FormInfo from '../Components/FormInfo';
import FormAddress from '../Components/FormAddress';
import FormAddInfo from '../Components/FormAddInfo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/forminfo" component={FormInfo} />
      <Route path="/formaddress" component={FormAddress} />
      <Route path="/formaddinfo" component={FormAddInfo} />
    </Switch>
  );
};

export default Routes;
