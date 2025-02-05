import { useState, useCallback } from "react";
import { login } from "../utils/network-data";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleLogin = useCallback(async () => {
    // Remove validation check from here
    setLoading(true);
    setError(null);

    console.log("Attempting to login with: ", formData); // Debugging

    try {
      const result = await login(formData);

      if (result.error) {
        setError(result.message || "Login failed");
        return { error: true, data: null };
      }

      console.log("Login successful, user data: ", result.data); // Debugging
      if (result.data && result.data.accessToken) {
        // Menyimpan access token dengan benar dalam localStorage
        localStorage.setItem(
          "accessToken",
          JSON.stringify(result.data.accessToken)
        );
      }
      return { error: false, data: result.data };
    } catch (err) {
      console.error("Error during login: ", err); // Debugging
      setError("Something went wrong!");
      return { error: true, data: null };
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return {
    login: handleLogin,
    loading,
    error,
    formData,
    handleChange,
    validate,
    errors,
  };
};

export default useLogin;
