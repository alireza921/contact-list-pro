import React from "react";
import { FaTrash } from "react-icons/fa";

import styles from "./contact-list.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      {contacts.map((c) => (
        <div key={c.id} className={styles.container}>
          <ul className={styles.list}>
            <li>
              <span> name : </span> {c.name}
            </li>
            <li>
              <span> E-mail : </span> {c.email}
            </li>
          </ul>
          {/* <button className={styles.btn} onClick = {() => onDelete(c.id)} > Delete</button> */}
          <div className={styles.remove} onClick={() => onDelete(c.id)}>
            <FaTrash />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
