import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import s from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = name => {
    if (name === 'good') return setGood(state => state + 1);
    if (name === 'neutral') return setNeutral(state => state + 1);
    if (name === 'bad') return setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedback = Math.round((good * 100) / countTotalFeedback());
    return PositiveFeedback > 0 ? PositiveFeedback : 0;
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback is given" />
        )}
      </Section>
    </div>
  );
}

export default App;
