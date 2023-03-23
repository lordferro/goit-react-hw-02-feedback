import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  const statisticMarkup = (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>
        Positive feedback:{' '}
        {positivePercentage() + '%'}
      </p>
    </div>
  );

  return (
    <>
      <h2>Statistics</h2>
      {total() ? (
        statisticMarkup
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
