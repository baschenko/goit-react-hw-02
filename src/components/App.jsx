import Description from './Description/Description';
import s from './App.module.css';
import Options from './Options/Options';
import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = options => {
    if (options !== 'reset') {
      setValues({ ...values, [options]: values[options] + 1 });
    } else {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <div className={s.section}>
      <Description />
      <Options
        values={values}
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
