import * as React from 'react';
import Div from '../styled-components/Header/HeaderDiv';
import HeaderLink from '../styled-components/Header/HeaderLink';

const Header = () => (
  <Div>
    <HeaderLink>Login</HeaderLink>
    <HeaderLink>Sign Up</HeaderLink>
  </Div>
);

export default Header;
