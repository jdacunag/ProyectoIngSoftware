

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const ProductCard = ({ university }) => {
  const navigate = useNavigate();
  const handleonclick = () => {
    navigate("/graphics")
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
      <img
        className="w-1/3 h-auto object-cover"
        src="https://colombiaestudia.com/wp-content/uploads/2021/06/logo_eafit.png" // URL de la imagen del producto
        alt="Product"
      />
      <div className="w-2/3 p-4">
        <h2 className="text-gray-900 text-2xl font-bold">{university.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{university.description}</p>
        <div className="mt-2">
          <span className="text-2xl text-gray-700">$15000.99</span>
          <span className="text-sm text-gray-600 ml-1"><br />venta de los datos de los estudiantes del curso de </span>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleonclick}>
            Comprar Ahora
      
          </button>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  university: PropTypes.string.isRequired,
}
export default ProductCard;



