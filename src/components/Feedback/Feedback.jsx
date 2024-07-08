import s from './Feedback.module.css';

const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  // Виймаємо значення ключів об'єкту у массив подій
  const feedbacks = Object.keys(values);

  // Обгортаємо список масиву подій в розмітку
  return (
    <div>
      <ul className={s.list}>
        {feedbacks.map(feedback => (
          <li key={feedback}>
            {feedback}: {values[feedback]}
          </li>
        ))}
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
