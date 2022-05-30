import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div key={contact.id} className={styles.container}>
      <Link to={`/contact/${contact.id}`} state={contact}>
        <ul className={styles.list}>
          <li>
            <span> name : </span> {contact.name}
          </li>
          <li>
            <span> E-mail : </span> {contact.email}
          </li>
        </ul>
      </Link>

      <div className={styles.containerBtn}>
        <Link to={`/edit/${contact.id}`}>
          <button className={styles.edit}> Edit </button>
        </Link>
        <div className={styles.remove} onClick={onDelete}>
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default Contact;
