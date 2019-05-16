import React from 'react';
import T from 'prop-types';
import {Link} from 'react-router-dom';
import s from './Header.module.scss';
import { routes } from '../../router';
import Api from '../../../Api';

function Header({handlerLogout}) {
  return (
    <header className={s.header}>
      <div className={s.left}>
      <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
      {Api.Auth.isLoggedIn ?(
        <button type="button" onClick={handlerLogout}>
        Logout
        </button>
      ):(

      <Link to={routes.login}>Login</Link>
      )}
      </div>
    </header>
   );
};
Header.propTypes={} ;

export default NotFound;
