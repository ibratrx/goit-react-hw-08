import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const EditContactForm = ({ contactToEdit, setContactToEdit }) => {
  const [name, setName] = useState(contactToEdit?.name || "");
  const [number, setNumber] = useState(contactToEdit?.number || "");
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setNumber(contactToEdit.number);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: contactToEdit.id, name, number }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully");
        setContactToEdit(null); 
      })
      .catch(() => toast.error("Failed to update contact"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContactForm;