import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div className="ButtonPanel">
      <div className="group1">
        <Button btnName="AC" clickHandler={handleClick} />
        <Button btnName="+/-" clickHandler={handleClick} />
        <Button btnName="%" clickHandler={handleClick} />
        <Button btnName="÷" clickHandler={handleClick} />
      </div>
      <div className="group2">
        <Button btnName="7" clickHandler={handleClick} />
        <Button btnName="8" clickHandler={handleClick} />
        <Button btnName="9" clickHandler={handleClick} />
        <Button btnName="x" clickHandler={handleClick} />
      </div>
      <div className="group3">
        <Button btnName="4" clickHandler={handleClick} />
        <Button btnName="5" clickHandler={handleClick} />
        <Button btnName="6" clickHandler={handleClick} />
        <Button btnName="-" clickHandler={handleClick} />
      </div>
      <div className="group4">
        <Button btnName="1" clickHandler={handleClick} />
        <Button btnName="2" clickHandler={handleClick} />
        <Button btnName="3" clickHandler={handleClick} />
        <Button btnName="+" clickHandler={handleClick} />
      </div>
      <div className="group5">
        <Button btnName="0" clickHandler={handleClick} />
        <Button btnName="." clickHandler={handleClick} />
        <Button btnName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
