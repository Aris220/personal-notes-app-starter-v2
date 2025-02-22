import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../styles/style.module.css";
//File context
import { useLanguage } from "../context/language/LanguageContext";
//File custom hook
import useAuth from "../hooks/useAuth";

//File component
import InputForm from "../component/Elements/input/auth/InputForm";
import ButtonAuth from "../component/Elements/button/auth/ButtonAuth";

const Login = () => {
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  const { login, loading, error } = useAuth(); // Use useAuth hook
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [localErrors, setLocalErrors] = useState({});

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLocalErrors({ ...localErrors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    let errors = {};
    if (!formData.email.includes("@")) {
      errors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setLocalErrors(errors);

    // Stop if there are errors
    if (Object.keys(errors).length > 0) return;

    const success = await login(formData);
    if (success) {
      navigate("/"); // Redirect after successful login
    }
  };

  return (
    <section className={styles["login-page"]}>
      <h2>{language == "en" ? "Login App" : "Masuk App"}</h2>
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
            <p className={styles["error-text"]}>{localErrors.email}</p>
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
            <p className={styles["error-text"]}>{localErrors.password}</p>
          )}

          <ButtonAuth disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </ButtonAuth>
        </div>
        {error && <p className={styles["error-text"]}>{error}</p>}
      </form>
      <p>
        {language === "en" ? "Don't have an account?" : "Belum punya akun?"}
        <Link to="/register">
          {" "}
          {language === "en" ? "REGISTER HERE" : "Daftar di sini"}
        </Link>
      </p>
    </section>
  );
};
// PropTypes untuk komponen Login
Login.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  localErrors: PropTypes.object,
};

// PropTypes untuk komponen InputForm
InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// PropTypes untuk komponen ButtonAuth
ButtonAuth.propTypes = {
  disabled: PropTypes.bool.isRequired,
};
export default Login;
