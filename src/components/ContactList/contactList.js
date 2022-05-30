import Contact from "../contact/contact";
import styles from "./contact-list.module.css";
import { useState, useEffect } from "react";
import { getContact } from "../../services/getContact/getContact";
import { deleteContact } from "../../services/deleteContact/deleteContact";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContact()
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    console.log(id);
    deleteContact(id);
  };

  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          onDelete={() => deleteContactHandler(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
