import { useRef, useEffect } from "react";
//File css
import styles from "../styles/style.module.css";

//File component
import InputForm from "../component/Elements/input/auth/InputForm";
import ButtonAuth from "../component/Elements/button/auth/ButtonAuth";

const Register = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
  };
  return (
    <>
      <section className={styles["register-page"]}>
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["input-register"]}>
            <InputForm
              label="Name"
              type="text"
              name="name"
              placeholder="John Doe"
              ref={usernameRef}
            />
            <InputForm
              label="Email"
              type="text"
              name="email"
              placeholder="example@mail.com"
            />
            <div className="mb-6">
              <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="******"
              />

              <InputForm
                label="ConfirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="******"
              />
            </div>
            <ButtonAuth>Register</ButtonAuth>
          </div>
        </form>
      </section>
    </>
  );
};
export default Register;
