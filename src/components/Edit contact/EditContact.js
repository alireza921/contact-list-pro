import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact } from "../../services/putContact/putContact";
import styles from "./edit-contact.module.css";
const EditContact = () => {
  const navigate = useNavigate();
  const [editContact, setEditContact] = useState({
    name: "",
    email: "",
  });

  const params = useParams();
  const id = params.id;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!editContact.name || !editContact.email) {
      alert("this field is mandatory == ejbari");
      return;
    }
    updateContact(editContact, id);
    setEditContact({
      name: "",
      email: "",
    });
    navigate("/");
  };

  const changeHandler = (e) => {
    setEditContact({ ...editContact, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.formControll}>
      <div className={styles.inputContainer}>
        <label> name : </label>
        <input
          type='text'
          onChange={changeHandler}
          name='name'
          value={editContact.name}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label> Email : </label>
        <input
          type='email'
          onChange={changeHandler}
          name='email'
          value={editContact.email}
          className={styles.input}
        />
      </div>
      <button type='submit' className={styles.btn}>
        Edit Contact
      </button>
    </form>
  );
};

export default EditContact;
