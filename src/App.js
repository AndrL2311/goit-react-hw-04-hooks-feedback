import React from 'react';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import s from './App.module.css';

class App extends React.Component {
  constructor() {
    super();

    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    //Преобразуем ключи объекта в масив
    this.options = Object.keys(this.state);
  }

  onLeaveFeedback(name) {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }
  // Та же функция только через стрелку
  // onLeaveFeedback = name => {
  //   this.setState(prevState => {
  //     return {
  //       [name]: prevState[name] + 1,
  //     };
  //   });
  // };

  countTotalFeedback() {
    // return this.state.good + this.state.neutral + this.state.bad;
    return this.options.reduce((acc, option) => acc + this.state[option], 0);
  }

  countPositiveFeedbackPercentage() {
    const PositiveFeedback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return PositiveFeedback > 0 ? PositiveFeedback : 0;
  }

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback is given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
