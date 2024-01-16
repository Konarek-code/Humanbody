import Switch from '@mui/material/Switch';
import './Switchbuttonstyle.css';

export default function SwitchButton({
  onSwitch,
  checked,
  leftLabel,
  rightLabel
}) {
  return (
    <div className="switchcontainer">
      <div className="labelContainer">
        <span className="leftLabel">{leftLabel}</span>
        <Switch
          checked={checked}
          className="switchbut redSwitch"
          onChange={onSwitch}
        />
        <span className="rightLabel">{rightLabel}</span>
      </div>
    </div>
  );
}
