import React, { useState } from 'react';
import ContactView from './components/ContactView/ContactView';
import ContactList from './components/ContactList/ContactList';
import Contacts from "./contacts.json";
import "./App.css";

function App() {
  const emptyContact = { "firstName": "", "lastName": "", "phone": "", "email": "" };
  const loadContacts = () => JSON.parse(JSON.stringify(Contacts));
  const [contacts, setContacts] = useState(loadContacts);
  const [currentContactIndex, setCurrentContactIndex] = useState(null);
  const [contactWorkingState, setContactWorkingState] = useState(emptyContact);

  const saveContact = () => {
    if (currentContactIndex == null) {
      
      setContacts((prevContacts) => [...prevContacts, contactWorkingState])
      setCurrentContactIndex(contacts.length)
    } else {
      setContacts((prevContacts) => [
        ...prevContacts.slice(0, currentContactIndex),
        contactWorkingState,
        ...prevContacts.slice(currentContactIndex + 1)
      ])
    }
  };

  const setCurrentContactIndexBundled = (index) => {
    setContactWorkingState(index == null ? emptyContact : contacts[index])
    setCurrentContactIndex(index)
  }

  return (
    <div className="App">
      <h1>My contacts</h1>
      <div className='ContactBox'>
          <>
            <ContactList contacts={contacts} setCurrentContactIndex={setCurrentContactIndexBundled} />
            <ContactView setContactWorkingState={setContactWorkingState} saveContact={saveContact} contactWorkingState={contactWorkingState} />
          </>
      </div>
    </div>
  );
}

export default App;
