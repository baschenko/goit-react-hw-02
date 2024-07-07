import Description from './Description/Description';
import s from './App.module.css';
import Options from './Options/Options';
import { useEffect, useState } from 'react';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  // Створюємо State і загружаємо з LocalStorage об'єкт, якщо є
  const [values, setValues] = useState(() => {
    const saveValues = JSON.parse(window.localStorage.getItem('values'));
    if (saveValues) {
      return saveValues;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // Додаємо у LocalStorage
  useEffect(() => {
    window.localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  // Оновлюємо у State по події
  const updateFeedback = options => {
    if (options !== 'reset') {
      setValues(prev => ({ ...prev, [options]: prev[options] + 1 }));
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
