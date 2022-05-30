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
    // console.log(id);
    deleteContact(id);
  };

  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      {contacts ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => deleteContactHandler(contact.id)}
          />
        ))
      ) : (
        <h2> loading . . . </h2>
      )}
    </div>
  );
};

export default ContactList;
