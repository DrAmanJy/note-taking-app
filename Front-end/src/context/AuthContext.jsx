import { createContext, useState, useContext } from "react";
import { loginUser, signupUser } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("local");

  const login = async (formData) => {
    setLoading(true);
    try {
      const result = await loginUser(formData);
      setUser(result.user);
      setFetchError(null);
      setMode("online");
      alert(result.message);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (formData) => {
    setLoading(true);
    try {
      const result = await signupUser(formData);
      setUser(result.user);
      setFetchError(null);
      setMode("online");
      alert(result.message);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, loading, fetchError, mode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
