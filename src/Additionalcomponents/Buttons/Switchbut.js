import React from 'react';

import Switch from '@mui/material/Switch';

export default function Switchbut({ onSwitch }) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = event => {
    setChecked(event.target.checked);
  };
  return (
    <div className="switchcontainer">
      <p>Back</p>
      <Switch
        checked={checked}
        className="switchbut redSwitch"
        onChange={handleChange}
        onClick={onSwitch}
      />
      <p>Front</p>
    </div>
  );
}
