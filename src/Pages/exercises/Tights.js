import { tightsItems } from './ExercisesItems';
import ExerciseTemplate from './ExercisesTemplate';

function Tights() {
  return (
    <ExerciseTemplate
      allButtonsIds={[1, 2, 3, 4, 5, 6]}
      dumbellButtonsIds={[2, 3]}
      barButtonsIds={[4, 5]}
      othersButtonsIds={[1, 6]}
      items={tightsItems}
    />
  );
}

export default Tights;
