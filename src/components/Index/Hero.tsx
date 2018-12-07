import * as React from 'react';
import Body from '../../styled-components/Index/Hero/HeroBody';
import Header from '../../styled-components/Index/Hero/HeroHeader';

export class Hero extends React.Component {
  public render() {
    return (
      <Body>
        <Header>Get more done</Header>
        <hr style={{ width: '50vw' }} />
        <Header>One thing at a time</Header>
      </Body>
    );
  }
}
