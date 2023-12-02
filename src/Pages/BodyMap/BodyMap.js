import { useState } from 'react';

import SwitchButton from '../../Additionalcomponents/Buttons/Switchbutton/Switchbut';
// Cant those images be cropped to have only the interesting thing on the image without soooo much background?
import { ReactComponent as ManImageBack } from '../../images/backman.svg';
import { ReactComponent as ManImageFront } from '../../images/bodyman.svg';
import { ReactComponent as WomenImageBack } from '../../images/women.svg';
import { ReactComponent as WomenImageFront } from '../../images/womenp.svg';
import './BodyMap.css';

export const BodyMap = ({ isWoman }) => {
  const [isFront, setIsFront] = useState(true);
  const toggleBodyPosition = () => {
    setIsFront(prevState => !prevState);
  };

  return (
    <div className="body-container">
      <SwitchButton onSwitch={toggleBodyPosition} checked={isFront} />
      <div className="svg-container">
        {isWoman ? (
          isFront ? (
            // it has class called womanback, but its actually front!
            <WomenImageFront className="image" />
          ) : (
            <WomenImageBack className="image" />
          )
        ) : isFront ? (
          <ManImageFront className="image image-scale-regular" />
        ) : (
          <ManImageBack className="image" />
        )}
      </div>
    </div>
  );
};
