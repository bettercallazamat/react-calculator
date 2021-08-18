import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div className="ButtonPanel">
      <div className="btn-group btn-group1">
        <Button btnName="AC" clickHandler={handleClick} color="gray" />
        <Button btnName="+/-" clickHandler={handleClick} color="gray" />
        <Button btnName="%" clickHandler={handleClick} color="gray" />
        <Button btnName="÷" clickHandler={handleClick} color="orange" />
      </div>
      <div className="btn-group btn-group2">
        <Button btnName="7" clickHandler={handleClick} color="gray" />
        <Button btnName="8" clickHandler={handleClick} color="gray" />
        <Button btnName="9" clickHandler={handleClick} color="gray" />
        <Button btnName="x" clickHandler={handleClick} color="orange" />
      </div>
      <div className="btn-group btn-group3">
        <Button btnName="4" clickHandler={handleClick} color="gray" />
        <Button btnName="5" clickHandler={handleClick} color="gray" />
        <Button btnName="6" clickHandler={handleClick} color="gray" />
        <Button btnName="-" clickHandler={handleClick} color="orange" />
      </div>
      <div className="btn-group btn-group4">
        <Button btnName="1" clickHandler={handleClick} color="gray" />
        <Button btnName="2" clickHandler={handleClick} color="gray" />
        <Button btnName="3" clickHandler={handleClick} color="gray" />
        <Button btnName="+" clickHandler={handleClick} color="orange" />
      </div>
      <div className="btn-group btn-group5">
        <Button btnName="0" clickHandler={handleClick} color="gray" isWide />
        <Button btnName="." clickHandler={handleClick} color="gray" />
        <Button btnName="=" clickHandler={handleClick} color="orange" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
