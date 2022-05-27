import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/contactList";

const routes = [
  { id: 1, path: "/", element: <ContactList /> },
  { id: 2, path: "/newcontact", element: <AddContact  /> },
//   {id : 3 , path : '*' , element : <NotFound /> }
];

export default routes;
