import { Link } from 'gatsby';
import * as React from 'react';

interface IProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: IProps) => (
  <h1>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {siteTitle}
    </Link>
  </h1>
);

export default Header;
