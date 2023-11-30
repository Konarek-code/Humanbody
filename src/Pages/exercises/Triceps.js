import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Exercisesstyle.css';
import BasicButtonGroup from '../../Additionalcomponents/Buttons/Buttongroup';
import charizard from '../../images/charizard.svg';
import charmander from '../../images/charmanderlvl.png';
import charmelon from '../../images/charmeleon.svg';
import checkbutt from '../../images/checkbutton.png';

function Triceps() {
  const [items, setItems] = useState([
    {
      id: 1,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=Tx3NO59voOI',
      text: 'Dumbbell triceps extension - knee supported'
    },
    {
      id: 2,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=AAGwEBIZkDA',
      text: 'Eccentric dips'
    },
    {
      id: 3,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=ir5PsbniVSc',
      text: 'Dumbbell skull crusher'
    },
    {
      id: 4,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charizard,
      vid: 'https://www.youtube.com/watch?v=jjrfLISzTl4',
      text: 'Dips – triceps version'
    },
    {
      id: 5,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=priRWVpDV8c',
      text: 'Overhead barbell triceps extension'
    },
    {
      id: 6,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=btrCQonIHKA',
      text: 'EZ bar close grip bench press'
    },
    {
      id: 7,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=HXia-KuaBu4',
      text: 'Banded triceps extension'
    },
    {
      id: 8,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=a5rUdCeTtSE',
      text: 'Power band overhead triceps extension'
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
    const visibleIds = [1, 3];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };

  const handleButtonOneClickBar = () => {
    const visibleIds = [5, 6];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickothers = () => {
    const visibleIds = [4, 2];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickGum = () => {
    const visibleIds = [7, 8];
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

export default Triceps;
