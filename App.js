import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState("");
  const [conversionType, setConversionType] = useState("usdToInr");
  const [result, setResult] = useState(null);

  const conversionRates = {
    usdToInr: 82.5,
    eurToInr: 88.3,
    inrToUsd: 0.012,
    inrToEur: 0.011,
  };

  const handleConvert = () => {
    if (amount === "") {
      alert("Please enter an amount");
      return;
    }
    const rate = conversionRates[conversionType];
    setResult(amount * rate);
  };

  return (
    <div className="converter">
      <h1>Currency Converter</h1>
      <div className="form-group">
        <label htmlFor="amount">Enter Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="conversion">Conversion Type:</label>
        <select
          id="conversion"
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
        >
          <option value="usdToInr">USD to INR</option>
          <option value="eurToInr">EUR to INR</option>
          <option value="inrToUsd">INR to USD</option>
          <option value="inrToEur">INR to EUR</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {result !== null && (
        <div className="result">
          <h2>Converted Amount: {result.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
