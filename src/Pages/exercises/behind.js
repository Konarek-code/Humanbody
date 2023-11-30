import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Exercisesstyle.css';
import BasicButtonGroup from '../../Additionalcomponents/Buttons/Buttongroup';
import charizard from '../../images/charizard.svg';
import charmander from '../../images/charmanderlvl.png';
import charmelon from '../../images/charmeleon.svg';
import checkbutt from '../../images/checkbutton.png';

function Behind() {
  const [items, setItems] = useState([
    {
      id: 1,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=6lVne16l9oI',
      text: 'Side walk'
    },
    {
      id: 2,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=Lu3s1ZeHCaI',
      text: 'Pull through with band'
    },
    {
      id: 3,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=Zg1RjB1w1Rs',
      text: 'Hip thrust'
    },
    {
      id: 4,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=5Mkus4JdXDE',
      text: 'Hip cable adduction'
    },
    {
      id: 5,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=WhtxQnm4254',
      text: 'Kickback machine'
    },
    {
      id: 6,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=030tWtbyvog',
      text: 'Hip drop'
    },
    {
      id: 7,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charizard,
      vid: 'https://www.youtube.com/watch?v=gcNh17Ckjgg',
      text: 'Squat'
    },
    {
      id: 8,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=ZbScP8SVjoU',
      text: 'Sumo elevated deadlift Dumbell'
    },
    {
      id: 9,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=KREVcp5mZTQ',
      text: 'RDL kickstand with dumbbell'
    },
    {
      id: 10,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=0kx1QOzhTCQ',
      text: 'Glute bridge with dumbbell'
    },
    {
      id: 11,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmander,
      vid: 'https://www.youtube.com/watch?v=vKV2aueKBDA',
      text: 'Donkey kick'
    },
    {
      id: 12,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charizard,
      vid: 'https://www.youtube.com/watch?v=GBXQdlzBxM4',
      text: 'Lying hamstring curls'
    },
    {
      id: 13,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charizard,
      vid: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
      text: 'Deadlift'
    },
    {
      id: 14,
      src: checkbutt,
      alt: 'checkbut',
      visible: true,
      lvl: charmelon,
      vid: 'https://www.youtube.com/watch?v=rzJse5Ds98k',
      text: 'Landmine One leg RDL'
    }
  ]);

  const handleButtonOneClickAll = () => {
    const visibleIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };

  const handleButtonOneClickDumbbell = () => {
    const visibleIds = [8, 9, 10];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };

  const handleButtonOneClickBar = () => {
    const visibleIds = [3, 7, 13, 14];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickothers = () => {
    const visibleIds = [4, 5, 6];
    const updatedItems = items.map(item => ({
      ...item,
      visible: visibleIds.includes(item.id)
    }));
    setItems(updatedItems);
  };
  const handleButtonOneClickGum = () => {
    const visibleIds = [1, 2, 11, 12];
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

export default Behind;
