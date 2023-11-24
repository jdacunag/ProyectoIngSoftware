import PropTypes from 'prop-types';
import style from './ListBox.module.css';
import Title from './Title';

export default function ListBox({ children, boxTitle}) {
    return (
        <div className={style.listBoxContainer}>
            <Title white>{boxTitle}</Title>
            <div className={style.listBox}>
                <ul>
                    {children && children.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ListBox.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    boxTitle: PropTypes.string.isRequired, // Asegura que boxTitle sea una cadena de texto
};