import PropTypes from 'prop-types';
import style from './Title.module.css';

export default function Title({ white, children }) {
    const titleStyle = {
        color: white ? 'white' : 'black',
        fontFamily: 'Roboto, sans-serif', // Reemplaza 'TuFuentePersonalizada' con el nombre de la fuente que deseas utilizar
    };

    return (
        <h1 style={titleStyle} className={style.title}>
            {children}
        </h1>
    );
}

Title.propTypes = {
    white: PropTypes.bool,
    children: PropTypes.string.isRequired,
};
