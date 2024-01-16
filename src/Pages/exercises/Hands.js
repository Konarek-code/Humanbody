import { handItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Hand() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[2, 5]}
      barButtonsIds={[1, 5]}
      othersButtonsIds={[3, 4]}
      items={[handItems]}
    />
  );
}

export default Hand;
