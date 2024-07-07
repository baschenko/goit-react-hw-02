import s from './Options.module.css';

const Options = ({ values, onLeaveFeedback, totalFeedback }) => {
  const nameButtons = Object.keys(values);

  if (totalFeedback > 0) {
    nameButtons.push('reset');
  }

  console.log(nameButtons);
  const buttons = nameButtons.map(nameButton => {
    return (
      <button
        key={nameButton}
        type="button"
        onClick={() => onLeaveFeedback(nameButton)}
        className={s.btn}
      >
        {nameButton}
      </button>
    );
  });

  return <div className={s.section}>{buttons}</div>;
};

export default Options;
