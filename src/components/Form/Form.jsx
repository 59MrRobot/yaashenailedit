import React, { useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('+27');

  const onSubmit = () => {
    console.log(firstName, surname, number);
  }

  return (
    <div className="form" id="book">
      <h2>Complete Form</h2>

      <form className="form__container">
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          required
          className="form__input"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <input
          type="text"
          name="surname"
          id="surname"
          value={surname}
          placeholder="Surname"
          required
          className="form__input"
          onChange={(event) => setSurname(event.target.value)}
        />

        <input
          type="text"
          name="cell"
          id="cell"
          value={number}
          required
          maxLength={15}
          className="form__input"
          onChange={(event) => setNumber(event.target.value)}
        />

        <input type="datetime-local" name="datetime" id="datetime" />

        <button className="form__button" onClick={() => onSubmit()}>Submit</button>
      </form>
    </div>
  )
}