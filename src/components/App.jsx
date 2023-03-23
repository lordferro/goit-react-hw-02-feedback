import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/';
import { Section } from './Section';
import { Statistics } from './Statistics/';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  calcTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  positivePercentage = () => {
    return Math.round((this.state.good * 100) / this.calcTotal());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.calcTotal}
          positivePercentage={this.positivePercentage}
        ></Statistics>
      </Section>
    );
  }
}
