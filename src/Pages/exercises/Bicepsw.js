import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Exercisesstyle.css';
import BasicButtonGroup from '../../Additionalcomponents/Buttons/Buttongroup';
import charizard from '../../images/charizard.svg';
import charmander from '../../images/charmanderlvl.png';
import charmelon from '../../images/charmeleon.svg';
import checkbutt from '../../images/checkbutton.png';

function Bicep() {
  const [items, setItems] = useState([
    {
      id: 1,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=BV3l5Q5t9fo',
      text: 'TRX biceps curl'
    },
    {
      id: 2,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=FSGDM9-dZ9w',
      text: 'Zottman curl'
    },
    {
      id: 3,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=MkPz57rN2nw',
      text: 'Banded biceps curls'
    },
    {
      id: 4,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charizard,
      vid: 'https://www.youtube.com/watch?v=Zbs3ko8ycyg',
      text: 'preacher curls'
    },
    {
      id: 5,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=8bMtBJPl8ow',
      text: 'Barbell Curl'
    },
    {
      id: 6,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=yIUKi1goT-g',
      text: 'Reverse barbell biceps curl'
    }
  ]);

  const handleButtonOneClickAll = () => {
    const visibleIds = [1, 2, 3, 4, 5, 6];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };

  const handleButtonOneClickDumbbell = () => {
    const visibleIds = [2];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };

  const handleButtonOneClickBar = () => {
    const visibleIds = [4, 5, 6];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickothers = () => {
    const visibleIds = [1];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickGum = () => {
    const visibleIds = [3];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  return (
    <div className="App-header">
      <div className="chosebar">
        <BasicButtonGroup
          onButtonOneClick={handleButtonOneClickAll}
          onButtonTwoClick={handleButtonOneClickDumbbell}
          onButtonThreeClick={handleButtonOneClickGum}
          onButtonFourClick={handleButtonOneClickBar}
          onButtonFiveClick={handleButtonOneClickothers}
        />
      </div>

      <div className="exercise-container">
        <ul>
          {items
            .filter(item => item.visible)
            .map(item => (
              <li className="rectangle3" key={item.id}>
                <img className="charmander" src={item.lvl} alt="level" />
                <p>{item.text}</p>
                <Link to={item.vid} target="_blank">
                  <img className="checkbut" src={item.src} alt={item.alt} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Bicep;
