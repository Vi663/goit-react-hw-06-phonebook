import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import s from './ContactForm.module.css';

export function ContactForm({onSubmit}) {
  
  const initialState = {
    name: "",
    number: "",
  };

  const [state, setstate] = useState(initialState)
  
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = event => {
    const { name, value } = event.target;
    setstate((prevState) => ({
      ...prevState, [name]: value
    }))
  };

  const handleSubmit = e => {
    e.preventDefault()
    const { name, number } = state;

    if (name && number) {
      const newContact = { name, number };
      onSubmit(newContact)
      resetContact()
    }
  }

  const resetContact = () => {
    setstate({ ...initialState });
  }

  const { name, number } = state;
  return (
    <form className={s.contactForm} autoComplete="on" onSubmit={handleSubmit}>
      <label
        className={s.contactLabel}
        htmlFor={nameInputId}
      >Name</label>
      <input
        className={s.contactInput}
        type="text"
        name="name"
        value={name}
        id={nameInputId}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
        
      <label
        htmlFor={numberInputId}
        className={s.contactLabel}
      >Phone number</label>
      <input
        className={s.contactInput}
        type="tel"
        name="number"
        value={number}
        id={numberInputId}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button className={s.contactBtn}
        type="submit"
        name="submit">Add Contact
      </button>
    </form>
  )
}

const mapDispatchToProps = {
  onSubmit: contactsActions.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);