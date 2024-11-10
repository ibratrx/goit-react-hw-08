import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { Button } from "@mui/material";

const Contact = ({ name, number, onDeleteContact, onEditContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEdit = () => {
    onEditContact({ name: editedName, number: editedNumber });
    setIsEditing(false);
  };

  return (
    <li className={styles.contact}>
      {isEditing ? (
        <>
          <div className={styles.contactInfo}>
            <IoPersonCircleSharp className={styles.icon} />
            <input
              type="text"
              className={styles.input}
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>
          <div className={styles.contactInfo}>
            <FaPhoneAlt className={styles.icon} />
            <input
              type="text"
              className={styles.input}
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
            />
          </div>
          <Button className={styles.button} onClick={handleEdit}>
            Save
          </Button>
        </>
      ) : (
        <>
          <div className={styles.contactInfo}>
            <IoPersonCircleSharp className={styles.icon} />
            <span>{name}</span>
          </div>
          <div className={styles.contactInfo}>
            <FaPhoneAlt className={styles.icon} />
            <span>{number}</span>
          </div>
          <Button
            className={styles.button}
            onClick={() => setIsEditing(true)}
            type="button"
          >
            Edit
          </Button>
          <Button
            className={styles.button}
            onClick={onDeleteContact}
              type="button"
              color="white"
          >
            Delete
          </Button>
        </>
      )}
    </li>
  );
};

export default Contact;