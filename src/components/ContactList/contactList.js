import Contact from "../contact/contact";
import styles from "./contact-list.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      {contacts.map((contact) => (
        <Contact contact={contact} onDelete={() => onDelete(contact.id)} />
      ))}
    </div>
  );
};

export default ContactList;
