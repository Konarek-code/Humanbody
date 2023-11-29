import * as React from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import men from '../../images/menelo.jpg';
import women from '../../images/womenelo.jpg';

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

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 710,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    height: 100
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor'
    }
  }
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 5,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}));

export default function Buttons() {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
    >
      {images.map(({ link, title, width, height, url }) => (
        <ImageButton
          component={NavLink}
          to={`/${link}`}
          focusRipple
          key={title}
          style={{
            width,
            height
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${url})`,
              filter: title === 'Men' ? 'brightness(39%)' : 'none'
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: '6px'
              }}
            >
              {title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
