import React from 'react';
import './ContactView.css';

const ContactForm = ({ setContactWorkingState, saveContact, contactWorkingState }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactWorkingState((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContact();
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        First Name*<br/>
        <input type="text" name="firstName" value={contactWorkingState.firstName} onChange={handleChange} required/>
      </label>
      <label>
        Last Name*<br/>
        <input type="text" name="lastName" value={contactWorkingState.lastName} onChange={handleChange} required/>
      </label>
      <label>
        Phone<br/>
        <input type="tel" name="phone" value={contactWorkingState.phone} onChange={handleChange} />
      </label>
      <label>
        Email<br/>
        <input type="email" name="email" value={contactWorkingState.email} onChange={handleChange} />
      </label>
      <div className='buttonContainer'>
        <button className='saveButton' type="submit">Save</button>
        <button className='deleteButton' type='reset'>Cancel</button>
        <p>* required</p>
      </div>
    </form>
  );
};

export default ContactForm;