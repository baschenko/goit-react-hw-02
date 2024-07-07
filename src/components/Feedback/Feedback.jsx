import s from './Feedback.module.css';

const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  const feedbacks = Object.keys(values);
  const feedbackList = feedbacks.map(feedback => {
    return (
      <li key={feedback}>
        {feedback}: {values[feedback]}
      </li>
    );
  });
  return (
    <div>
      <ul className={s.list}>{feedbackList}</ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
