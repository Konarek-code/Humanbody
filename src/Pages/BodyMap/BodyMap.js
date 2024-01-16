import { useState } from 'react';

import SwitchButton from '../../Components/Buttons/Switchbutton/Switchbut';
import { ReactComponent as ManImageBack } from '../../Images/backbodyman.svg';
import { ReactComponent as ManImageFront } from '../../Images/frontbodyman.svg';
import { ReactComponent as WomenImageBack } from '../../Images/women.svg';
import { ReactComponent as WomenImageFront } from '../../Images/womenp.svg';
import './BodyMap.css';

export const BodyMap = ({ isWoman }) => {
  const [isFront, setIsFront] = useState(true);
  const toggleBodyPosition = () => {
    setIsFront(prevState => !prevState);
  };

  return (
    <div className="body-container">
      <SwitchButton
        onSwitch={toggleBodyPosition}
        checked={isFront}
        leftLabel="Front"
        rightLabel="Back"
      />
      <div className="svg-container">
        {isWoman ? (
          isFront ? (
            <WomenImageFront className="image" />
          ) : (
            <WomenImageBack className="image" />
          )
        ) : isFront ? (
          <ManImageFront className="image" />
        ) : (
          <ManImageBack className="image" />
        )}
      </div>
    </div>
  );
};
