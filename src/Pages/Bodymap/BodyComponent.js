import { useState } from 'react';

import Switchbut from '../../Additionalcomponents/Buttons/Switchbut';
import { ReactComponent as Backman } from '../../images/backman.svg';
import { ReactComponent as Bodymap } from '../../images/bodyman.svg';
import { ReactComponent as Women } from '../../images/women.svg';
import { ReactComponent as Womenp } from '../../images/womenp.svg';
import '../../App.css';

function BodyComponent({ isWoman }) {
  const [isBodymap, setIsBodymap] = useState(true);

  const toggleBodymap = () => {
    setIsBodymap(!isBodymap);
  };

  return (
    <div className="body-container">
      <header className="header">
        <Switchbut onSwitch={toggleBodymap} />
        <div className="svg-container">
          {isWoman ? (
            <>
              <Womenp className={isBodymap ? 'visible womanback' : 'hidden'} />
              <Women className={isBodymap ? 'hidden' : 'visible womanp'} />
            </>
          ) : (
            <>
              <Bodymap className={isBodymap ? 'visible' : 'hidden'} />
              <Backman className={isBodymap ? 'hidden' : 'visible backman'} />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default BodyComponent;
