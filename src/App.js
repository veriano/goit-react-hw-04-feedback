  import { useState } from 'react';
  import FeedbackOptions from './Components/FeedbackOptions';
  import Statistics from './Components/Statistics'; 
  import Section from './Components/Section';
  
  function App () {
   
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
   
    const countTotalFeedback = () => {
      const total = (good + neutral + bad);
      return total;
    }

    const countPositiveFeedbackPercentage = () => {
      const percentage = (100 / countTotalFeedback()) * good;
      return percentage;
    }
   
    const handleIncrement = (option) => {

      switch (option) {
        case 'good':
          setGood(good + 1 );
          break;

        case 'neutral':
          setNeutral(neutral + 1 );
          break;

        case 'bad':
          setBad(bad + 1 );
          break;

        default:
          return;
      }
    }

    return (
      <div>
        <Section title="Please leave feedback">

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

        </Section>
      </div>
    )
}
export default App;


