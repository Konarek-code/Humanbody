import { clavsItmes } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Clavs() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[1, 5]}
      barButtonsIds={[2, 4]}
      othersButtonsIds={[3, 6]}
      items={[clavsItmes]}
    />
  );
}

export default Clavs;
