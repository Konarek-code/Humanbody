import { trapsItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Traps() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[4]}
      barButtonsIds={[1, 2, 3]}
      othersButtonsIds={[6, 5]}
      items={trapsItems}
    />
  );
}

export default Traps;
