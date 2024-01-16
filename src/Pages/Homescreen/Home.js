import React from 'react';

import Buttons from '../../Components/Buttons/Homescreenbuttons/ImageButton';
import men from '../../Images/MenstartPage.jpg';
import women from '../../Images/WomenStartPage.jpg';

const images = [
  {
    url: men,
    title: 'Men',
    width: '50%',
    link: 'BodyMap',
    height: '100%'
  },
  {
    url: women,
    title: 'Woman',
    width: '50%',
    link: 'BodyMapWoman',
    height: '100%'
  }
];

function Homepage() {
  return (
    <div className="App">
      <Buttons data={images} />
    </div>
  );
}

export default Homepage;
