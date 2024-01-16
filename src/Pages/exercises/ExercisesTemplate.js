import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Exercisesstyle.css';
import Buttongroup from '../../Components/Buttons/Buttongroup.js';

function ExerciseTemplate({
  allButtonsIds = [],
  dumbellButtonsIds = [],
  bandButtonsIds = [],
  barButtonsIds = [],
  othersButtonsIds = [],
  items=[]
}) {
  const [visibleIds, setVisibleIds] = useState(allButtonsIds);
  return (
    <div className="App-header">
      <div className="chosebar">
        <Buttongroup
          allButtonsIds={allButtonsIds}
          dumbellButtonsIds={dumbellButtonsIds}
          bandButtonsIds={bandButtonsIds}
          barButtonsIds={barButtonsIds}
          othersButtonsIds={othersButtonsIds}
          setVisibleIds={setVisibleIds}
        />
      </div>
      <div className="exercise-container">
        <ul>
          {items
            .filter(item => visibleIds.includes(item.id))
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

export default ExerciseTemplate;
