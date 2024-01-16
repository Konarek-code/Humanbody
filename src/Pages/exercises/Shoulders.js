import { shoulderItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Shoulder() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[2, 6]}
      bandButtonsIds={[1]}
      barButtonsIds={[5]}
      othersButtonsIds={[3, 4]}
      items={shoulderItems}
    />
  );
}

export default Shoulder;
