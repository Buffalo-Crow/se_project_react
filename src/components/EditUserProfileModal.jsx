import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";

function EditUserProfileModal({
  activeModal,
  isOpen,
  closeActiveModal,
  onEditProfileData,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [data, setData] = useState({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  useEffect(() => {
    setData({ name: currentUser.name, avatar: currentUser.avatar });
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfileChangeSubmit = (e) => {
    e.preventDefault();
    onEditProfileData({ ...data });
  };

  return (
    <ModalWithForm
      buttonText="Save Changes"
      title="Edit Profile "
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleProfileChangeSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          placeholder="Name"
          className="modal__input"
          type="text"
          id="editusername"
          name="name"
          required
          minLength={"1"}
          maxLength={"30"}
          onChange={handleChange}
          value={data.name || ""}
        />{" "}
      </label>
      <label className="modal__label">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          id="edituseravatar"
          name="avatar"
          value={data.avatar || ""}
          onChange={handleChange}
        />{" "}
      </label>
    </ModalWithForm>
  );
}

export default EditUserProfileModal;
