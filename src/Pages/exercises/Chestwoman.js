import { chestWomanItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';
function Chestwoman() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[6]}
      bandButtonsIds={[5, 2]}
      barButtonsIds={[1]}
      othersButtonsIds={[4, 3]}
      items={[chestWomanItems]}
    />
  );
}

export default Chestwoman;
