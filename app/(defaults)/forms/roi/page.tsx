"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [investment, setInvestment] = useState("");
  const [profit, setProfit] = useState("");
  const [roi, setROI] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const[storedROI,setStoredROI]=useState([])

  // Azure Function API URL
  const API_URL = "http://localhost:7071"; // Change to your Azure Function App URL when deployed

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(e.target.value);
  };

  const handleProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfit(e.target.value);
  };

  const fetchROIData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getROI`);
      setStoredROI(response.data.roi_data);
    } catch (error) {
      console.error("Error fetching ROI data:", error);
    }
};

useEffect(() => {
    fetchROIData();
}, []);

  // Calculate ROI (POST)
  const calculateROI = async () => {
    if (!investment || !profit) {
      setMessage("⚠️ Please enter both investment and profit.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/calculateROI`, {
        investment: parseFloat(investment),
        profit: parseFloat(profit),
      });

      setROI(response.data.roi);
      setMessage("✅ Calculation successful!");
    } catch (error) {
      setMessage("❌ Error calculating ROI.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">ROI Calculator</h1>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Investment Amount</label>
          <input
            type="number"
            placeholder="Enter investment"
            value={investment}
            onChange={handleInvestmentChange}
            className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Profit</label>
          <input
            type="number"
            placeholder="Enter profit"
            value={profit}
            onChange={handleProfitChange}
            className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculateROI}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300"
        >
          Calculate ROI
        </button>

        {message && <p className="mt-4 text-center font-medium">{message}</p>}

        {roi !== null && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 text-center rounded-lg shadow-md">
            <h2 className="text-lg font-bold">ROI: {roi.toFixed(2)}%</h2>
          </div>
        )}
        <h2>Stored ROI Data</h2>
<ul>
  {storedROI.length > 0 ? (
    storedROI.map((entry, index) => (
      <li key={index}>
        Investment: {entry.investment}, Profit: {entry.profit}, ROI: {entry.roi.toFixed(2)}%
      </li>
    ))
  ) : (
    <p>No ROI data found.</p>
  )}
</ul>
      </div>
    </div>
  );
}
