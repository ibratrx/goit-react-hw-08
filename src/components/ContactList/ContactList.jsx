import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact.jsx";
import DeleteModal from "../DeleteModal/DeleteModal";
import { toast } from "react-hot-toast";
import styles from "./ContactList.module.css";
import EditContactForm from "../EditContactForm/EditContactForm";


const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleDelete = (id) => {
    setContactToDelete(id);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contactToDelete))
      .unwrap()
      .then(() => toast.success("Contact deleted successfully"))
      .catch(() => toast.error("Failed to delete contact"));
    setContactToDelete(null);
  };

  const cancelDelete = () => {
    setContactToDelete(null);
  };

  const handleEditContact = (id, updatedData) => {
    dispatch(updateContact({ id, ...updatedData }))
      .unwrap()
      .then(() => toast.success("Contact updated successfully"))
      .catch(() => toast.error("Failed to update contact"));
  };

  {
      contactToEdit && (
        <EditContactForm
          contact={contactToEdit}
          onSave={(updatedData) =>
            handleEditContact(contactToEdit.id, updatedData)
          }
          onCancel={() => setContactToEdit(null)}
        />
      );
  }
  
  return (
    <div>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => handleDelete(id)}
            onEditContact={(updatedData) => handleEditContact(id, updatedData)} 
          />
        ))}
      </ul>
      {contactToDelete && (
        <DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default ContactList;