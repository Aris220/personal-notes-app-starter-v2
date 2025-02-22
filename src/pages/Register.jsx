import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router";
//File css
import styles from "../styles/style.module.css";
//File context
import { useLanguage } from "../context/language/LanguageContext";
//File custom hook
import useAuth from "../hooks/useAuth";

//File component
import InputForm from "../component/Elements/input/auth/InputForm";
import ButtonAuth from "../component/Elements/button/auth/ButtonAuth";

const Register = () => {
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  const { register, loading, error } = useAuth(); // Use useAuth hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [localErrors, setLocalErrors] = useState({});
  const { language } = useLanguage();
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
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setLocalErrors(errors);

    // Stop if there are errors
    if (Object.keys(errors).length > 0) return;

    const success = await register(formData);
    if (success) {
      navigate("/login"); // Redirect to login page after successful registration
    }
  };

  return (
    <section className={styles["register-page"]}>
      <h2>{language === "en" ? "Register App" : "Daftar App"}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-register"]}>
          <InputForm
            label="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            ref={usernameRef}
            value={formData.name}
            onChange={handleChange}
          />

          <InputForm
            label="Email"
            type="text"
            name="email"
            placeholder="example@mail.com"
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

          <InputForm
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="******"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {localErrors.confirmPassword && (
            <p className={styles["error-text"]}>
              {localErrors.confirmPassword}
            </p>
          )}

          <ButtonAuth disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </ButtonAuth>
        </div>
        {error && <p className={styles["error-text"]}>{error}</p>}
      </form>
      <p>
        {language === "en" ? "Already have an account?" : "Sudah punya akun?"}
        <Link to="/login">
          {language === "en" ? "Login here" : "Login di sini"}
        </Link>
      </p>
    </section>
  );
};
// PropTypes untuk InputForm
InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// PropTypes untuk ButtonAuth
ButtonAuth.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
export default Register;
