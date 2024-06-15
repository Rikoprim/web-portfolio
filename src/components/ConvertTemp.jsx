import { useState } from 'react'

const ConvertTemp = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState(null);

  const handleConvert = () => {
    if (fahrenheit === '') {
      setCelsius(null);
      return;
    }

    const f = parseFloat(fahrenheit);
    if (isNaN(f)) {
      setCelsius('Invalid input');
      return;
    }

    const c = ((f - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  return (
    <div>
      <input
        className="form-control"
        id="fahrenheit"
        type="number"
        placeholder="Fahrenheit"
        required
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
      <button
        className="btn btn-primary mt-2"
        id="convertButton"
        onClick={handleConvert}
      >
        Convert to Celsius
      </button>
      <h5 className="mt-2">
        <div id="resultCelsius">
          {celsius !== null && <span>{celsius} °C</span>}
        </div>
      </h5>
    </div>
  );
}

export default ConvertTemp