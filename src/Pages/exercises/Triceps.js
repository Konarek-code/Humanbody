import { tricepsItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Triceps() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6, 7, 8]}
      dumbellButtonsIds={[1, 3]}
      barButtonsIds={[5, 6]}
      othersButtonsIds={[4, 2]}
      bandButtonIds={[7, 8]}
      items={tricepsItems}
    />
  );
}

export default Triceps;
