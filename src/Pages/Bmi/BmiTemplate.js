import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

import { bmiLevel } from './BmiLevel';
import './index.css';

function BmiTemplate() {
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const min = 0;
  const max = 300;

  const handleChange = (event, field) => {
    let value = event.target.value.replace(/\D/g, '');
    if (!isNaN(value)) {
      value = Math.max(min, Math.min(max, Number(value)));
    }
    if (field === 'weight') {
      setWeight(value);
    } else if (field === 'height') {
      setHeight(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height');
    } else {
      const heightm = height / 100; // We convert cm to meters
      const bmiValue = weight / heightm ** 2;
      setBmi(bmiValue.toFixed(1));
      const bmiCategory = bmiLevel.find(level => bmiValue <= level.max);
      setMessage(bmiCategory.message);
    }
  };

  return (
    <div className="app" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <h2 className="text-quizz">Bmi Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <TextField
              type="text"
              id="weight"
              fullWidth
              value={weight}
              label="Weight"
              variant="outlined"
              inputProps={{ maxLength: 3 }}
              onChange={event => handleChange(event, 'weight')}
            />
          </div>
          <div className="fields">
            <TextField
              type="text"
              fullWidth
              id="Height"
              label="Height"
              variant="outlined"
              value={height}
              inputProps={{ maxLength: 3 }}
              onChange={event => handleChange(event, 'height')}
            />
          </div>
          <div className="fields">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="center">
          <h3 className="text-quizz">Your Bmi is: {bmi} </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BmiTemplate;
