import Switch from '@mui/material/Switch';
import './Switchbuttonstyle.css';

export default function SwitchButton({ onSwitch, checked }) {
  //those back and fron text should be passed as props, not as hard coded text. THis button is useless for other cases
  // it should be done with FormLabel https://mui.com/material-ui/api/form-label/
  // it should also be reactive on labels click with another handler
  return (
    <div className="switchcontainer">
      <p>Back</p>
      <Switch
        checked={checked}
        className="switchbut redSwitch"
        onChange={onSwitch}
      />
      <p>Front</p>
    </div>
  );
}
