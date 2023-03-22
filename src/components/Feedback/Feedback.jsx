import { Component } from 'react';
import css from './Feedback.module.css';
import { feedbackType } from 'constants/feedback';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onVote = rating => {
    this.setState(prevState => ({[rating]: prevState[rating]+1}));
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <h2>Please leave a feedback</h2>
        <div className={css.wrapper}>
          <button
            className={css.feedbackButton}
            type="button"
            onClick={() => this.onVote(feedbackType.good)}
          >
            Good
          </button>
          <button
            className={css.feedbackButton}
            type="button"
            onClick={() => this.onVote(feedbackType.neutral)}
          >
            Neutral
          </button>
          <button
            className={css.feedbackButton}
            type="button"
            onClick={() => this.onVote(feedbackType.bad)}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </>
    );
  }
}
