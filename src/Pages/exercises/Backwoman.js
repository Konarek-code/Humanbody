import { backWomanItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Backwoman() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[4, 5]}
      bandButtonsIds={[1, 3]}
      barButtonsIds={[6, 8]}
      othersButtonsIds={[2, 4, 5, 7]}
      items={backWomanItems}
    />
  );
}

export default Backwoman;
