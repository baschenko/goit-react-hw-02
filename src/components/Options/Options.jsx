import s from './Options.module.css';

const Options = ({ values, onLeaveFeedback, totalFeedback }) => {
  // Виймаємо значення ключів об'єкту у массив кнопок
  const nameButtons = Object.keys(values);

  // Якщо totalFeedback > 0 додаємо кнопку Reset
  if (totalFeedback > 0) {
    nameButtons.push('reset');
  }

  // Обгортаємо список масиву кнопок в розмітку
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
