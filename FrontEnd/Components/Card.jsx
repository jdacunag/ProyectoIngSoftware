import PropTypes from 'prop-types';
import style from './Card.module.css';

export default function Card({ onClick, backgroundColor, children }) {
    const cardStyle = {
        cursor: onClick ? 'pointer' : 'unset',
        backgroundColor: backgroundColor || 'unset', // Usa el color proporcionado o 'unset' por defecto
    };

    return (
        <div style={cardStyle} onClick={onClick} className={style.card}>
            {children}
        </div>
    );
}

Card.propTypes = {
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string, // Nueva prop para el color de fondo
    children: PropTypes.node.isRequired,
};