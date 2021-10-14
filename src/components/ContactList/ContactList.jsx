import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from "./ContactListItem";
import s from './ContactList.module.css'


export function ContactList({ contacts }) {
    const isShowContacts = contacts.length > 0;
  return (
    <div>
      {isShowContacts && (
        <ul className={s.contactList}>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const lowerCaseFilter = filter.toLowerCase();

  const getFilteredContacts = () => {
    if (filter) {
      return items.filter(item =>
        item.name.toLowerCase().includes(lowerCaseFilter),
      );
    }

    return items;
  };

  return {
    contacts: getFilteredContacts(),
  };
};

export default connect(mapStateToProps)(ContactList);