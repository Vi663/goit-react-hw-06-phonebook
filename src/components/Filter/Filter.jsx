import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import s from './Filter.module.css'

const Filter = ({ contacts, filterValue, onFilter }) => {

  return (
    <div>
      <p>Find contacts by name</p>
      <input className={s.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilter}
      />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filterValue: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

