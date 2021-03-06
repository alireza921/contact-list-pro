import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContact } from "../../services/postContact/postcontact";
import styles from "./add-contact.module.css";
const AddContact = () => {
  const navigate = useNavigate();

  const [addContact, setAddContact] = useState({
    name: "",
    email: "",
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!addContact.name || !addContact.email) {
      alert("this field is mandatory == ejbari");
      return;
    }
    postContact(addContact);
    setAddContact({
      name: "",
      email: "",
    });
    navigate("/");
  };

  const changeHandler = (e) => {
    setAddContact({ ...addContact, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.formControll}>
      <div className={styles.inputContainer}>
        <label> name : </label>
        <input
          type='text'
          onChange={changeHandler}
          name='name'
          value={addContact.name}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label> Email : </label>
        <input
          type='email'
          onChange={changeHandler}
          name='email'
          value={addContact.email}
          className={styles.input}
        />
      </div>
      <button type='submit' className={styles.btn}>
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
