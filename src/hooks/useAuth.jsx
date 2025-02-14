import { useState, useCallback, useEffect } from "react";
import { login, register } from "../utils/network-data";
import { useNavigate } from "react-router";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setUser({ token: JSON.parse(token) });
    }
  }, []);

  // Login function
  const handleLogin = useCallback(async ({ email, password }) => {
    setLoading(true);
    setError(null);

    const result = await login({ email, password });
    if (result.error) {
      setError("Invalid email or password");
      setLoading(false);
      return false;
    }

    localStorage.setItem(
      "accessToken",
      JSON.stringify(result.data.accessToken)
    );
    setUser({ token: result.data.accessToken });
    setLoading(false);
    return true;
  }, []);

  // Register function with password confirmation
  const handleRegister = useCallback(
    async ({ name, email, password, confirmPassword }) => {
      setLoading(true);
      setError(null);

      // Validate password match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return false;
      }

      const result = await register({ name, email, password });
      if (result.error) {
        setError("Registration failed");
        setLoading(false);
        return false;
      }

      setLoading(false);
      return true;
    },
    []
  );

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");

    setUser(null);
    navigate("/login");
  }, [navigate, setUser]);

  return {
    user,
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout,
  };
};

export default useAuth;
