import { clavsWomanItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Clavs1() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[1, 3]}
      barButtonsIds={[3, 4, 6]}
      othersButtonsIds={[2, 5]}
      items={[clavsWomanItems]}
    />
  );
}

export default Clavs1;
