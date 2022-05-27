// import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import styles from "./contact-list.module.css";

const ContactList = ({ contacts, onDelete }) => {
  // const params = useParams()
  // const id = params.id ;
  // console.log(id);
  return (
    <div className={styles.holderContactList}>
      <h2> Contact List </h2>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.container}>
          <Link to={{ pathname: `/contact/${contact.id}`, state:"salam" }}>
            <ul className={styles.list}>
              <li>
                <span> name : </span> {contact.name}
              </li>
              <li>
                <span> E-mail : </span> {contact.email}
              </li>
            </ul>
          </Link>
          {/* <button className={styles.btn} onClick = {() => onDelete(contact.id)} > Delete</button> */}
          <div className={styles.remove} onClick={() => onDelete(contact.id)}>
            <FaTrash />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
