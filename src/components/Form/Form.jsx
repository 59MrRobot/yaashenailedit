import React, { useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('+27');
  const [length, setLength] = useState('default');
  const [shape, setShape] = useState('default');

  const onSubmit = () => {
    console.log(firstName, surname, number);
  }

  return (
    <div className="form" id="book">
      <h2 className="heading">Complete Form</h2>

      <form className="form__container" action="submit_form.php" method="post" encType="multipart/form-data">
        <div className="form__row">
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
        </div>

        <div className="form__row">
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

          <input
            type="datetime-local"
            name="datetime"
            id="datetime"
            required
            className="form__input"
          />
        </div>

        <div className="form__row">
          <select
            name="length"
            id="length"
            className="form__input"
            value={length}
            required
            onChange={(event) => setLength(event.target.value)}
          >
            <option value="default" disabled>Select Length</option>
            <option value="Long">Long</option>
            <option value="Medium">Medium</option>
            <option value="Short">Short</option>
          </select>

          <select
            name="shape"
            id="shape"
            className="form__input"
            value={shape}
            required
            onChange={(event) => setShape(event.target.value)}
          >
            <option value="default" disabled>Select Shape</option>
            <option value="Almond">Almond</option>
            <option value="Coffin">Coffin</option>
            <option value="Square">Square</option>
            <option value="Stiletto">Stiletto</option>
          </select>
        </div>

        <div className="form__row">
          <textarea
            rows="4"
            placeholder="Anything else?"
            className="form__input"
          />
        </div>

        <div className="form__row form__row--column">
          <p className="form__label">Upload Inspiration</p>

          <input type="file" name="images" id="images" accept="image/*" />
        </div>

        <a href={`https://api.whatsapp.com/send?phone=27681244812&text=${firstName}`}>
          <button className="form__button" onClick={() => onSubmit()}>Submit</button>
        </a>
      </form>
    </div>
  )
}