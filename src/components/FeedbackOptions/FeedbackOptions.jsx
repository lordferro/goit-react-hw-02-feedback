import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <div className={css.wrapper}>
      {optionsKeys.map(option => {
        return (
          <button type='button'
            className={css.feedbackButton}
            name={[option]}
            onClick={() => {
              onLeaveFeedback(option);
                }}
                key = {option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object,
}