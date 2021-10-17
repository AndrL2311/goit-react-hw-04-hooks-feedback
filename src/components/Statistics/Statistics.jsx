import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.statistics}>
      <li className="item">
        <span className={s.label}>Good:</span>
        <span className={s.value}>{good}</span>
      </li>
      <li className="item">
        <span className={s.label}>Neutral:</span>
        <span className={s.value}>{neutral}</span>
      </li>
      <li className="item">
        <span className={s.label}>Bad:</span>
        <span className={s.value}>{bad}</span>
      </li>
      <li className="item">
        <span className={s.label}>Total:</span>
        <span className={s.value}>{total}</span>
      </li>
      <li className="item">
        <span className={s.label}>Positive Feedback:</span>
        <span className={s.value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  message: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
