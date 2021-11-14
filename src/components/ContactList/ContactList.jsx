import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getItemsValue, getFilterValue } from "../../redux/contacts/contacts.Selectors";
import contactsActions from '../../redux/contacts/contactsActions';
import ContactListItem from "./ContactListItem";
import s from './ContactList.module.css'


export function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getItemsValue);
  const filter = useSelector(getFilterValue);
  const lowerCaseFilter = filter.toLowerCase();
  const getFilteredContacts = () => {
    
    if (filter) {
      return items.filter(item =>
        (item.name.toLowerCase().includes(lowerCaseFilter))
      )
    }
    dispatch(contactsActions.addContact(items))
    return items;
  }
  const contacts = getFilteredContacts()
  const isShowContacts = contacts.length > 0
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
};
// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const lowerCaseFilter = filter.toLowerCase();

//   const getFilteredContacts = () => {
//     if (filter) {
//       return items.filter(item =>
//         item.name.toLowerCase().includes(lowerCaseFilter),
//       );
//     }
//     return items;
//   };

//   return {
//     contacts: getFilteredContacts(),
//   };
// };

// export default connect(mapStateToProps)(ContactList);