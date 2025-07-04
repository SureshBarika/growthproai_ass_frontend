import { useState } from "react";
import axios from "axios";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleSubmit = async (form) => {
    const res = await axios.post("http://localhost:5000/business-data", form);
    setBusinessData(res.data);
    setFormData(form);
  };

  const refreshHeadline = async () => {
    const res = await axios.get("http://localhost:5000/regenerate-headline", {
      params: formData,
    });
    setBusinessData((prev) => ({ ...prev, headline: res.data.headline }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-center">Local Business Dashboard</h1>
      <BusinessForm onSubmit={handleSubmit} />
      {businessData && (
        <BusinessCard data={businessData} refreshHeadline={refreshHeadline} />
      )}
    </div>
  );
}

export default App;
