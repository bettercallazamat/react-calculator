import PropTypes from 'prop-types';

const Button = ({
  btnName, clickHandler, color, isWide,
}) => {
  const handleClick = (btnName) => clickHandler(btnName);

  const btnStyling = (isWide) => {
    if (isWide) {
      return `Button ${color} btnWide`;
    }
    return `Button ${color}`;
  };

  return (
    <button className={btnStyling(isWide)} type="button" onClick={() => handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  color: 'btn-operator',
  isWide: false,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
  color: PropTypes.string,
  isWide: PropTypes.bool,
};

export default Button;
