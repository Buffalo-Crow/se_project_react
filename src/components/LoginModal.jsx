import ModalWithForm from "./ModalWithForm";
import { useState } from "react";

function LoginModal({
  closeActiveModal,
  isOpen,
  activeModal,
  onLogin,
  handleRegisterClick,
}) {
  const [data, setData] = useState({
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin({ ...data });
  };

  return (
    <>
      <ModalWithForm
        buttonText="Login"
        title="Login"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        isOpen={isOpen}
        onSubmit={handleLoginSubmit}
        childrenButtons={
          <button
            className="modal__redirect_register-btn"
            type="button"
            onClick={handleRegisterClick}
          >
            Or Sign Up
          </button>
        }
      >
        <label className="modal__label">
          Email{" "}
          <input
            placeholder="Email"
            className="modal__input"
            type="email"
            id="loginemail"
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
            id="loginpassword"
            name="password"
            required
            minLength={"1"}
            maxLength={"30"}
            autoComplete="current-password"
            onChange={handleChange}
            value={data.password}
          />{" "}
        </label>
      </ModalWithForm>
    </>
  );
}

export default LoginModal;
