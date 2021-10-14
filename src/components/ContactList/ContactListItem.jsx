import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import s from './ContactList.module.css';

const ContactListItem = ({ name, number, onRemoveContact }) => (
  <li className={s.contactItem}>
    <span className={s.contactItemName}>{name}</span>
    <span className={s.contactItemNumber}>{number}</span>
    <button
      className={s.contactBtn}
      type="button"
      onClick={onRemoveContact}>
      Delete
    </button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const itemData = state.contacts.items.find(item => ownProps.id === item.id);

  return {
    ...itemData,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);