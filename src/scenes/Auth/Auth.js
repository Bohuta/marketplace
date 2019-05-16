import React from'react';
import T from'prop-types';
import {Switch, Route, Redirect}from'react-router-dom';
import s from'./Auth.module.scss';
import {Header} from '../../components';
import {routes}from'../router';
import Login from '../Login/Login';
import Register from'../Register/Register';
import Api from '../../api';

function Auth(){
  return(
    <Route path={routes.auth}>
    <div className={s.container}>
      <Header/>
      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home}/>}
        <Route path={routes.login} component={Login}/>
        <Route path={routes.register} component={Register}/>
      </Switch>
     </div>
     </Route>
  );
}
Auth.propTypes={};
export default Auth;
