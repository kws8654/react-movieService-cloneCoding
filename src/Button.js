import PropTypes from "prop-types";
import styles from "./Button.module.css"; // 따로 만들어서 특정부부만 css 적용

function Button({text}) {
    return <button className={styles.btn}> {text} </button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;