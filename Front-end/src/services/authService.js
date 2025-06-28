const BASE_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Login failed");

  return result;
};

export const signupUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Signup failed");

  return result;
};

export const getCurrentUser = async () => {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    credentials: "include",
  });

  const result = await res.json();
  return result;
};
