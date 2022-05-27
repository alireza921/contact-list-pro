import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import Contact from "./components/contact/contact";
import ContactList from "./components/ContactList/contactList";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  const [contacts, setContacts] = useState([]);

  const onAddContact = (addContact) => {
    console.log(contacts);

    setContacts([
      ...contacts,
      { ...addContact, id: Math.floor(Math.random() * 1000) },
    ]);
  };

  const deleteContactHandler = (id) => {
    console.log("delet Contact ", id);
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
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
          <Route path='/contact/:id' element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
