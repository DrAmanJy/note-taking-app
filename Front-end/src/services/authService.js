export const loginUser = async (credentials) => {
  const res = await fetch("http://localhost:5500/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Login failed");

  return result;
};

export const signupUser = async (data) => {
  const res = await fetch("http://localhost:5500/api/v1/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Signup failed");

  return result;
};
