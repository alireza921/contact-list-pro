import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/contactDetail/contactDetail";
import ContactList from "./components/ContactList/contactList";
import Layout from "./Layout/Layout";
import { deleteContact } from "./services/deleteContact/deleteContact";
import { getContact } from "./services/getContact/getContact";
import { postContact } from "./services/postContact/postcontact";

function App() {
  const [contacts, setContacts] = useState([]);

  const onAddContact = (addContact) => {
    console.log(contacts);
const newContact =  {
  ...addContact,
  id: Math.floor(Math.random() * 1000),
}
   postContact(newContact)
      .then((res) => getContact().then((res) => setContacts(res.data)));
  };

  const deleteContactHandler = (id) => {
    console.log(id);
    deleteContact(id).then((res) =>
      getContact().then((res) => setContacts(res.data))
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='App'>
      <h1> contacts App </h1>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              <ContactList
                contacts={contacts}
                onDelete={deleteContactHandler}
              />
            }
          />
          <Route
            path='/newcontact'
            element={<AddContact onAddContact={onAddContact} />}
          />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
