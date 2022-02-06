  import { useState, useEffect } from 'react';
  // import PropTypes from 'prop-types';
  import FeedbackOptions from './Components/FeedbackOptions';
  import Statistics from './Components/Statistics'; 
  import Section from './Components/Section';
  
  function App () {
   
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [option, setOption] = useState(0);
   
    const countTotalFeedback = () => {
    useEffect(() => {
      setTotal(good + neutral + bad);
    },[good, neutral, bad])
    }

    const countPositiveFeedbackPercentage = () => {
      setPercentage(100 / total * good);
    }
   
    const handleIncrement = (option) => {
      setOption(prevState => { prevState[option] + 1 });
    }

    return (
      <div>
        <Section title="Please leave feedback"></Section>

        <FeedbackOptions 
          options={ ['good', 'neutral', 'bad'] } 
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


