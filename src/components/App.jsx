import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/';
import { Notification } from './Notification/Notification';
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
    const optionsKeys = Object.keys(this.state);
    const total = this.calcTotal();
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.calcTotal}
            positivePercentage={this.positivePercentage}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
