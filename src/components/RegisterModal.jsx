import ModalWithForm from "./ModalWithForm";
import { useState } from "react";

function RegisterModal({ closeActiveModal, isOpen, activeModal, onRegister }) {
  const [data, setData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    onRegister({ ...data });
  };

  return (
    <ModalWithForm
      buttonText="Sign Up"
      title="Sign Up"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleRegistrationSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          placeholder="Name"
          className="modal__input"
          type="text"
          id="registername"
          name="name"
          required
          minLength={"1"}
          maxLength={"30"}
          onChange={handleChange}
          value={data.name}
        />{" "}
      </label>
      <label className="modal__label">
        Email
        <input
          placeholder="Email"
          className="modal__input"
          type="email"
          id="registeremail"
          name="email"
          required
          minLength={"1"}
          maxLength={"30"}
          onChange={handleChange}
          value={data.email}
        />{" "}
      </label>
      <label className="modal__label">
        Password{" "}
        <input
          placeholder="Password"
          className="modal__input"
          type="password"
          id="registerpassword"
          name="password"
          required
          minLength={"1"}
          maxLength={"30"}
          onChange={handleChange}
          value={data.password}
        />{" "}
      </label>
      <label className="modal__label">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          id="avatar"
          name="avatar"
          value={data.avatar}
          onChange={handleChange}
        />{" "}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
