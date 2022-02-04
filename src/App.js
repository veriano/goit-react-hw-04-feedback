  import { useState, useEffect } from 'react';
  import PropTypes from 'prop-types';
  import FeedbackOptions from './Components/FeedbackOptions';
  import Statistics from './Components/Statistics'; 
  import Section from './Components/Section';
  
  function App({ initialGood: 0, initialNeutral: 0, initialBad: 0}) {
    // static defaultProps = {
    //   initialGood: 0,
    //   initialNeutral: 0,
    //   initialBad: 0,
    // };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    // state = {
    //   good: this.props.initialGood,
    //   neutral: this.props.initialNeutral,
    //   bad: this.props.initialBad,
    // }
    const countTotalFeedback() {
    //  const { good, neutral, bad } = this.state; 
      const total = good + neutral + bad;
      return total;
    }

    const countPositiveFeedbackPercentage() {
      // const { good } = this.state;
      const percentage = (100 / countTotalFeedback()) * good;
      return percentage;
    }
   
     const handleIncrement = (option) => {
      this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        }
      })
    }
      // const { good, neutral, bad } = this.state;
      return (
      <div>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={ handleIncrement }
          />
        <Statistics
          good={ good }
          neutral={ neutral }
          bad={ bad }
          total={ countTotalFeedback() }
          positivePercentage={ countPositiveFeedbackPercentage() }
          />
          <Section />
      </div>
    )
}
export default App;

App.propTypes = {
      initialGood: PropTypes.number,
      initialNeutral: PropTypes.number,
      initialBad: PropTypes.number,
}
