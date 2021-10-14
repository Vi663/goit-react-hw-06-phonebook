import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import MainContainer from "../MainContainer/MainContainer";
import { ContactForm } from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  // const getLocalStorageItem = () => {
  //   return JSON.parse(window.localStorage.getItem('contacts'))
  // }

  // const [contacts, setContacts] = useState(getLocalStorageItem())
  // const [filter, setFilter] = useState('')
  // console.log(store.getState())
  // const formSubmitHandler = (data) => {
    
  //   const found = contacts.find((contact) => contact.name === data.name || contact.number === data.number);
     
  //   if (!found) {
  //     setContacts((prevState) => ([...prevState, { id: uuidv4(), name: data.name, number: data.number }]))
  //   }
  //   else {
  //     toast.error(`This name or number is already in contacts`)
  //   }
  // }
  
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  // useEffect(() => {
  //   setContacts(getLocalStorageItem())
  // }, [])

  // const findByName = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState => (prevState.filter(contact => (contact.id !== contactId))))
  // };

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      {/* <ToastContainer theme="colored" autoClose={3000} /> */}
    </MainContainer>
  )
}