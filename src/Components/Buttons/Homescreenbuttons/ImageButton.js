import React from 'react';

import { Box } from '@mui/material';

import ImageButtonComponent from './ImageButtonstyle';

const Buttons = ({data}) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    {data.map(({ link, title, width, height, url }) => (
      // why is this fragment here? totally useless. Why this component is mporting sth from `style`? Whyyyyy?????
      <React.Fragment key={title}>
        <ImageButtonComponent
          link={link}
          title={title}
          width={width}
          height={height}
          url={url}
        />
      </React.Fragment>
    ))}
  </Box>
);

export default Buttons;
