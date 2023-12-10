import React from 'react';
import "./ContactList.css";



const ContactList = ({ contacts, setCurrentContactIndex }) => {
  return (
    <div className='contact-list'>
    {contacts.map((contact, index) => (
      <button className='contact-entry' key={index} onClick={() => setCurrentContactIndex(index)}>
        {contact.firstName} {contact.lastName}
      </button>
    ))}
      <button className='contact-entry-add' onClick={() => setCurrentContactIndex(null)}>+ add new contact</button>
    </div>
  );
};

export default ContactList;
