import { useState } from "react";

export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return alert("Please fill both fields.");
    onSubmit({ name, location });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        placeholder="Business Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="btn-primary" type="submit">Submit</button>
    </form>
  );
}
