import { useState } from "react";

const ExpenseForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: Math.random(),
      title,
      date: new Date(date),
      amount: +amount,
    };

    if (title.length > 3 && amount > 0 && date.length > 0) {
      onSubmit(data);

      onCancel();

      setTitle("");
      setDate("");
      setAmount("");
    }
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const cancelClickHandler = () => {
    onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titre</label>
          <input value={title} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Montant</label>
          <input value={amount} onChange={amountChangeHandler} type="number" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={date} onChange={dateChangeHandler} type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelClickHandler} type="button">
          Annuler
        </button>
        <button type="submit">Ajouter une dépense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
