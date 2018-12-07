import { TimelineMax } from 'gsap';
import * as React from 'react';

import Body from '../../styled-components/Index/Hero/HeroBody';
import Header from '../../styled-components/Index/Hero/HeroHeader';
import Hr from '../../styled-components/Index/Hero/HeroHr';
import TodoDiv from '../../styled-components/Index/Hero/TodoDiv';

export class Hero extends React.Component {
  public state = {
    todo: 'TODO: ',
  };

  private header1Ref: any;
  private header2Ref: any;
  private hr1Ref: any;
  private todoRef: any;

  constructor(props: any) {
    super(props);
    this.header1Ref = null;
  }

  public componentDidMount() {
    this.playAnimation();
  }

  public playAnimation = () => {
    const timeline = new TimelineMax();
    timeline.from(this.header1Ref, 1, { opacity: 0 });
    timeline.from(this.hr1Ref, 1, { scale: 0 });
    timeline.from(this.header2Ref, 1, { opacity: 0, y: '+=100px' });
    timeline.from(this.todoRef, 1, { opacity: 0, width: '0px' });
    timeline.addCallback(() => this.animateTyping(), 4);
  };

  public animateTyping = () => {
    console.log('typing animation started');
    const textToType = 'Download App';
    const typingSpeed = 100;
    // tslint:disable-next-line
    for (let i = 0; i < textToType.length; i++) {
      setTimeout(
        () => this.setState({ todo: this.state.todo + textToType[i] }),
        i * typingSpeed,
      );
    }
  };

  public render() {
    return (
      <Body>
        <Header ref={h1 => (this.header1Ref = h1)}>Get more done</Header>
        <Hr ref={hr => (this.hr1Ref = hr)} />
        <Header ref={h1 => (this.header2Ref = h1)}>One thing at a time</Header>
        <TodoDiv ref={div => (this.todoRef = div)}>{this.state.todo}</TodoDiv>
      </Body>
    );
  }
}
