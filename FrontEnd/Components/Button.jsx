import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ icon, backgroundColor, submit, onClick, children }) {
    const buttonStyle = {
        backgroundColor: backgroundColor || '' // Usa el backgroundColor proporcionado o vacío por defecto
    };

    return (
        <button type={submit ? 'submit' : 'button'} onClick={onClick} style={buttonStyle} className={style.button}>
            <FontAwesomeIcon icon={icon} color="white" />
            <p>{children}</p>
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.object.isRequired,
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string
};
