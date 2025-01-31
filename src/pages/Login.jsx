import { useRef, useEffect } from "react";
//File css
import styles from "../styles/style.module.css";

//File component
import InputForm from "../component/Elements/input/auth/InputForm";
import ButtonAuth from "../component/Elements/button/auth/ButtonAuth";

const login = () => {
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
      <section className={styles["login-page"]}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["input-login"]}>
            <InputForm
              label="Email"
              type="text"
              name="email"
              placeholder="example@mail.com"
              ref={usernameRef}
            />
            <div className="mb-6">
              <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="******"
              />
            </div>
            <ButtonAuth>Login</ButtonAuth>
          </div>
        </form>
      </section>
    </>
  );
};
export default login;
