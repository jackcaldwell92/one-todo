import { TimelineMax } from 'gsap';
import * as React from 'react';

import Body from '../../styled-components/Index/Hero/HeroBody';
import Header from '../../styled-components/Index/Hero/HeroHeader';
import Hr from '../../styled-components/Index/Hero/HeroHr';
import TodoDiv from '../../styled-components/Index/Hero/TodoDiv';
import { Check } from './Check';

export class Hero extends React.Component {
  public state = {
    isChecked: false,
    todo: '',
  };

  private header1Ref: any;
  private header2Ref: any;
  private hr1Ref: any;
  private todoRef: any;
  private checkRef: any;

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
    timeline.from(this.checkRef, 2, { opacity: 0 });
  };

  public animateTyping = () => {
    const textToType = 'Get Started';
    const typingSpeed = 100;
    // tslint:disable-next-line
    for (let i = 0; i < textToType.length; i++) {
      setTimeout(
        () => this.setState({ todo: this.state.todo + textToType[i] }),
        i * typingSpeed,
      );
    }
  };

  public handleDownloadButtonClick = () => {
    const timeline = new TimelineMax();
    timeline.to(this.checkRef, 0.3, { scale: 1.2 });
    timeline.to(this.checkRef, 0.3, { scale: 1 });
    this.setState({ isChecked: true });
  };

  public render() {
    return (
      <Body>
        <Header ref={h1 => (this.header1Ref = h1)}>Get more done</Header>
        <Hr ref={hr => (this.hr1Ref = hr)} />
        <Header ref={h1 => (this.header2Ref = h1)}>One step at a time</Header>
        <TodoDiv
          ref={div => (this.todoRef = div)}
          onClick={this.handleDownloadButtonClick}
        >
          <p style={{ color: '#f8f8f8' }}>{this.state.todo}</p>
          <div style={{ display: 'flex' }} ref={div => (this.checkRef = div)}>
            <Check fill={this.state.isChecked ? '#e1eef4' : '#438db1'} />
          </div>
        </TodoDiv>
      </Body>
    );
  }
}
