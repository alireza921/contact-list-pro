import Contact from "../contact/contact";
import styles from "./contact-list.module.css";
import { useState, useEffect } from "react";
import { getContact } from "../../services/getContact/getContact";
import { deleteContact } from "../../services/deleteContact/deleteContact";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allContacts, setAllContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getContact();
      setContacts(data);
      setAllContacts(data);
    };
    fetchData();
  }, []);

  const searchHandelr = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;

    // if (search !== " ") {
      const filteredContact = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      // console.log(allContacts);
      setContacts(filteredContact);
    // } else {
    //   setContacts(allContacts);
    //   console.log("else ");
    // }
  };

  const deleteContactHandler = (id) => {
    deleteContact(id);
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      <div className={styles.search}>
        <label> Search Contacts </label>
        <input
          type='text'
          placeholder='Search Contact'
          onChange={searchHandelr}
          value={searchTerm}
        />
      </div>
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
