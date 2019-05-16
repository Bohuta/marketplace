import React from'react';
import T from'prop-types';
import {Link, withRouter} from'react-router-dom';
import {compose, withHandlers} from'recompose';
import s from'./Login.module.scss';
import {routes} from'../router';
import Api from '../../Api';

function Login({handleLogin}){
  return(
    <div>
      <button type="button" onClick={handleLogin}>Login</button>
      <Link to={routes.register}>Register</Link>
     </div>
  );
}
Login.propTypes={};


const enhancer=compose(
  withRouter,
  withHandlers({
handleLogin: props=>()=>{
Api.Auth.login();
props.history.push(routes.home);
},
  }),
);

export default enhancer(Login);
