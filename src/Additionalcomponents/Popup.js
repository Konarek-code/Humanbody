import React, { useState, useEffect, useRef } from 'react';

import { Modal, Box } from '@mui/material';

import arrow from '../images/arrow.png';

export default function Home() {
  const [displayPopUp, setDisplayPopUp] = useState(true);
  const popUpStyle = useState({
    fontFamily: 'Montserrat',
    position: 'absolute',
    width: 300,
    height: 200,
    border: '5px solid black',
    boxShadow: 24,
    padding: 5,
    background: 'rgba(0, 0, 0, 0.502)',
    maxWidth: '550px',
    margin: 'auto 10px',
    top: '200px',
    right: '100px',

    h3: {
      color: '#AAAAAA',
      textAlign: 'center',
      textJustify: 'inter-word',
      margin: 0
    },

    button: {
      position: 'absolute',
      top: '3%',
      right: '3%',
      background: 'transparent',
      border: 'transparent',
      cursor: 'pointer'
    },

    img: {
      position: 'absolute',
      top: '-55%',
      right: '45%',
      height: '50%'
    }
  });
  const lvlCheckRef = useRef(null);

  const closePopUp = () => {
    localStorage.setItem('seenPopUp', true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    const returningUser = localStorage.getItem('seenPopUp');
    setDisplayPopUp(!returningUser);
  }, []);

  return (
    <>
      <div ref={lvlCheckRef} />
      <div>
        {displayPopUp && (
          <Modal
            open
            onClose={closePopUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={popUpStyle}>
              <img src={arrow} alt="strzalka" />
              <h3 sx={popUpStyle.h3}>
                At the beginning, assess your proficiency level to better tailor
                the exercises to your needs
              </h3>
              <button sx={popUpStyle.button} onClick={closePopUp}>
                <h3>X</h3>
              </button>
            </Box>
          </Modal>
        )}
      </div>
    </>
  );
}
