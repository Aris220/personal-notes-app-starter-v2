import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useLogin from "../hooks/useLogin";
import styles from "../styles/style.module.css";
import InputForm from "../component/Elements/input/auth/InputForm";
import ButtonAuth from "../component/Elements/button/auth/ButtonAuth";

const Login = () => {
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  const { login, loading, error, formData, handleChange, validate, errors } =
    useLogin();
  const [localErrors, setLocalErrors] = useState({});

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs before submitting
    if (!validate()) {
      setLocalErrors(errors);
      return;
    }

    console.log("Submitting login data: ", formData); // Debugging

    const result = await login();

    if (result.error) {
      alert("Login failed: " + error);
    } else {
      alert("Login successful!");
      console.log("Redirecting to home...");
      navigate("/");
    }
  };

  return (
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
            value={formData.email}
            onChange={handleChange}
          />
          {localErrors.email && (
            <p className="text-red-500">{localErrors.email}</p>
          )}

          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="******"
            value={formData.password}
            onChange={handleChange}
          />
          {localErrors.password && (
            <p className="text-red-500">{localErrors.password}</p>
          )}

          <ButtonAuth disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </ButtonAuth>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default Login;
