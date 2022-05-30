import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/contactDetail/contactDetail";
import ContactList from "./components/ContactList/contactList";
import EditContact from "./components/Edit contact/EditContact";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className='App'>
      <h1> contacts App </h1>
      <Layout>
        <Routes>
          <Route path='/edit/:id' element={<EditContact />} />
          <Route path='/' element={<ContactList />} />
          <Route path='/newcontact' element={<AddContact />} />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
