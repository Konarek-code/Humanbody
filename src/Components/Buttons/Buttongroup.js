import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttongroup({
  allButtonsIds = [],
  dumbellButtonsIds = [],
  bandButtonsIds = [],
  barButtonsIds = [],
  othersButtonsIds = [],
  setVisibleIds = []
}) {
  return (
    <ButtonGroup
      color="error"
      variant="contained"
      aria-label="outlined primary button group"
    >
      {allButtonsIds.length > 0 && (
        <Button onClick={() => setVisibleIds(allButtonsIds)}>All</Button>
      )}
      {dumbellButtonsIds.length > 0 && (
        <Button onClick={() => setVisibleIds(dumbellButtonsIds)}>
          Dumbell
        </Button>
      )}
      {bandButtonsIds.length > 0 && (
        <Button onClick={() => setVisibleIds(bandButtonsIds)}>Band</Button>
      )}
      {othersButtonsIds.length > 0 && (
        <Button onClick={() => setVisibleIds(othersButtonsIds)}>Others</Button>
      )}
      {barButtonsIds.length > 0 && (
        <Button onClick={() => setVisibleIds(barButtonsIds)}>Bar</Button>
      )}
    </ButtonGroup>
  );
}
