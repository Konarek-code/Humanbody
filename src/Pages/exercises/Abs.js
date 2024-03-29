import { absItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate.js';

function Abs1() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[4, 5]}
      bandButtonsIds={[1, 2]}
      barButtonsIds={[3]}
      items={absItems}
    />
  );
}

export default Abs1;
