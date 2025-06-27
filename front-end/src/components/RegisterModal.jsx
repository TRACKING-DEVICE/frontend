import React, { useState } from 'react';

const RegisterModal = ({ onClose, onRegister, onSwitchToLogin }) => {
  const [username, setUsername] = useState(''); // New state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!username || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Include username
      });

      if (response.ok) {
        const data = await response.json();
        alert("Registration successful!");
        onRegister(); // Switch to login modal
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-4 w-80">
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          className="w-full border px-3 py-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border px-3 py-2 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="w-full border px-3 py-2 rounded"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Register
          </button>
        </div>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <button type="button" onClick={onSwitchToLogin} className="text-blue-600 underline">
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterModal;
