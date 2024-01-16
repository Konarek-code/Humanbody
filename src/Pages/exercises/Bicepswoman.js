import { chestItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Bicepswoman() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[2]}
      bandButtonsIds={[3]}
      barButtonsIds={[4, 5, 6]}
      othersButtonsIds={[1]}
      items={[chestItems]}
    />
  );
}

export default Bicepswoman;
