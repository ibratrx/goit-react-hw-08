import { useEffect } from "react";
import Modal from "react-modal";

const DeleteModal = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onCancel]);

  return (
    <Modal isOpen={true} onRequestClose={onCancel} color="black">
      <h2 className="modalTitle">Confirmation</h2>
      <p className="modalQuest">Are you sure you want to delete this contact?</p>
      <button onClick={onConfirm}>Yes, delete</button>
      <button onClick={onCancel}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;