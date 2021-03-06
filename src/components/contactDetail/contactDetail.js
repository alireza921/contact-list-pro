import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneContact } from "../../services/getOneContact/getOneContact";
import styles from "./contactDetail.module.css";

const ContactDetail = () => {

  const params = useParams();
  const id = params.id;

  const [contact, setContact] = useState({});

  useEffect(() => {
   getOneContact(id).then((res) => setContact(res.data));
  }, []);

  return (
    <div className={styles.holderContactDetail}>
      <h2> Contact Detail Component </h2>
      <h3 className={styles.detail}>
        id : <span> {contact.id} </span>
      </h3>
      <h3 className={styles.detail}>
        name : <span> {contact.name} </span>
      </h3>
      <h3 className={styles.detail}>
        email : <span> {contact.email} </span>
      </h3>

      <Link to='/'>
        <button className={styles.btn}> Back To Home </button>
      </Link>
    </div>
  );
};

export default ContactDetail;
