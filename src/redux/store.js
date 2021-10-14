import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from '../redux/contacts/contactsReduser';

// import { createStore } from 'redux';
// import { v4 as uuidv4 } from 'uuid';
// import { toast } from 'react-toastify';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contacts/create':
//       const found = state.contacts.items.find((contact) => contact.name === payload.name || contact.number === payload.number);
     
//       if (!found) {
//         return {
//           items: state.contacts.items.push({ id: uuidv4(), ...payload })
//         }
//       }
//       else {
//         toast.error(`This name or number is already in contacts`)
//       }
//     // case 'contacts/delete':
//     // case 'contacts/filter':
//       break
//     default:
//       return state;
//   }
// };

// export const store = createStore(reducer);

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});

export default store;