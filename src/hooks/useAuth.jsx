import { useState, useCallback, useEffect, useRef } from "react";
import { login, register, getUserLogged } from "../utils/network-data";
import { useNavigate } from "react-router";

const useAuth = ({ skipFetch = false } = {}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const hasFetched = useRef(false);
  const didRun = useRef(false);

  useEffect(() => {
    if (skipFetch) return;
    if (didRun.current) return;

    const fetchUser = async () => {
      const user = await getUserLogged();
      if (!user.error) {
        setUser(user.data);
      }
    };

    fetchUser();
    didRun.current = true;
  }, [skipFetch]);

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

    localStorage.setItem("accessToken", result.data.accessToken);
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
