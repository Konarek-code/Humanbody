import { chestItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Chest() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[2, 4]}
      bandButtonsIds={[3]}
      barButtonsIds={[1, 6]}
      othersButtonsIds={[5]}
      items={[chestItems]}
    />
  );
}

export default Chest;
