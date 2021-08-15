import Button from './Button';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="group1">
      <Button btnName="AC" />
      <Button btnName="+/-" />
      <Button btnName="%" />
      <Button btnName="/" />
    </div>
    <div className="group2">
      <Button btnName="7" />
      <Button btnName="8" />
      <Button btnName="9" />
      <Button btnName="X" />
    </div>
    <div className="group3">
      <Button btnName="4" />
      <Button btnName="5" />
      <Button btnName="6" />
      <Button btnName="-" />
    </div>
    <div className="group4">
      <Button btnName="1" />
      <Button btnName="2" />
      <Button btnName="3" />
      <Button btnName="+" />
    </div>
    <div className="group5">
      <Button btnName="0" />
      <Button btnName="." />
      <Button btnName="=" />
    </div>
  </div>
);

export default ButtonPanel;
