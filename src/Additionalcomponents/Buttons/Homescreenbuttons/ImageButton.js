import React from 'react';

import { Box } from '@mui/material';

import ImageButtonComponent from './ImageButtonstyle';

import men from '../../../images/menelo.jpg';
import women from '../../../images/womenelo.jpg';

const images = [
  {
    url: men,
    title: 'Men',
    width: '50%',
    link: 'Bodymap',
    height: '100%'
  },
  {
    url: women,
    title: 'Woman',
    width: '50%',
    link: 'Bodymapw',
    height: '100%'
  }
];

const Buttons = () => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    {images.map(({ link, title, width, height, url }) => (
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
