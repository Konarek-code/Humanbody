import { backItems } from './ExercisesItems.js';
import ExerciseTemplate from './ExercisesTemplate';

function Back() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[4, 5]}
      bandButtonsIds={[1]}
      barButtonsIds={[4, 6]}
      othersButtonsIds={[2, 3]}
      items={backItems}
    />
  );
}

export default Back;
