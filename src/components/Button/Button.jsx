import PropTypes from 'prop-types';

const Button = ({ onClick, title, type }) => {
  return (
    <button onClick={onClick} type={type}>
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
