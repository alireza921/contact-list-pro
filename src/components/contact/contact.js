import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./contact.module.css";
const Contact = () => {
  const params = useParams();

  const id = params.id;
  console.log(id);

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>Contact Component</h2>
      <h2> id of contact that select is : {id}</h2>
      <Link to='/'>
        <button> Back To Home </button>
      </Link>

      {/* 
      <NavLink to={`/contact/${(contact.id)}`} key={contact.id} className={styles.container}>
          <ul className={styles.list}>
            <li>
              <span> name : </span> {contact.name}
            </li>
            <li>
              <span> E-mail : </span> {contact.email}
            </li>
          </ul>
          <button className={styles.btn} onClick = {() => onDelete(contact.id)} > Delete</button>
          <div className={styles.remove} onClick={() => onDelete(contact.id)}>
            <FaTrash />
          </div>
        </NavLink> */}
    </div>
  );
};

export default Contact;
