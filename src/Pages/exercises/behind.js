import { behindItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Behind() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      dumbellButtonsIds={[8, 9, 10]}
      bandButtonsIds={[1, 2, 11, 12]}
      barButtonsIds={[3, 7, 13, 14]}
      othersButtonsIds={[4, 5, 6]}
      items={behindItems}
    />
  );
}

export default Behind;
