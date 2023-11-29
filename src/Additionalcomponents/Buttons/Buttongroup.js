import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttongroup({
  onButtonOneClick,
  onButtonTwoClick,
  onButtonThreeClick,
  onButtonFourClick,
  onButtonFiveClick,
  hideBandButton
}) {
  return (
    <ButtonGroup
      color="error"
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button onClick={onButtonOneClick}>All</Button>
      <Button onClick={onButtonTwoClick}>Dumbbell</Button>
      {!hideBandButton && <Button onClick={onButtonThreeClick}>Band</Button>}
      <Button onClick={onButtonFourClick}>Bar</Button>
      <Button onClick={onButtonFiveClick}>Others</Button>
    </ButtonGroup>
  );
}
