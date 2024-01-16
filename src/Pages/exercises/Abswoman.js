import { absWomanItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate.js';

function Abswoman() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[4, 5]}
      bandButtonsIds={[1, 2]}
      barButtonsIds={[3]}
      items={absWomanItems}
    />
  );
}

export default Abswoman;
