import { behindWomanItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Behindwoman() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      dumbellButtonsIds={[9, 10, 12]}
      bandButtonsIds={[1, 2, 11]}
      barButtonsIds={[3, 13]}
      othersButtonsIds={[2, 5, 6, 8, 14]}
      items={behindWomanItems}
    />
  );
}

export default Behindwoman;
