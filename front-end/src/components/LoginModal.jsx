import React, { useState } from "react";

const mockUser = {
  email: "admin@example.com",
  password: "1234"
};

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === mockUser.email && password === mockUser.password) {
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-80 shadow-lg space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <button type="button" onClick={onClose} className="text-gray-600 px-4 py-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
