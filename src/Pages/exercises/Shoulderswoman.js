import { shoulderWomanItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Cheste() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[3, 6, 4, 1]}
      bandButtonsIds={[3]}
      barButtonsIds={[3, 6]}
      othersButtonsIds={[2]}
      items={shoulderWomanItems}
    />
  );
}

export default Cheste;
