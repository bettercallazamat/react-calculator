import PropTypes from 'prop-types';

const Button = ({ btnName }) => (
  <div className="Button">
    {btnName}
  </div>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
