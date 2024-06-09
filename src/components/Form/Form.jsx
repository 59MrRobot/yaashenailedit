import React, { useEffect, useMemo, useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('+27');
  const numberLength = useMemo(() => number.split(' ').join('').length, [number]);

  useEffect(() => {
    if (numberLength % 3 === 0){
      setNumber(prev => `${prev} `);
    }
  }, [numberLength]);

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
          className="form__input"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <input
          type="text"
          name="surname"
          id="surname"
          value={surname}
          placeholder="Surname"
          className="form__input"
          onChange={(event) => setSurname(event.target.value)}
        />

        <input
          type="text"
          name="cell"
          id="cell"
          value={number}
          // pattern={/^\(\d{3}\)-\d{3}-\d{4}$/}
          maxLength={15}
          className="form__input"
          onChange={(event) => setNumber(event.target.value)}
        />

        <input
          type="submit"
          name="submit"
          id="submit"
          className="form__button"
        />
      </form>
    </div>
  )
}