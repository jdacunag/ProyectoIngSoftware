export default function Logo() {

    const estiloImagen = {
        display: 'block',       // Hace que la imagen sea un bloque para alinear verticalmente
        margin: '0 auto',       // Centra horizontalmente la imagen
      };

    return (
        <div style={{ textAlign: 'center' }}> {/* Alinea horizontalmente el contenido */}
            <img
              src='src\images\logo.png'
              width="300"
              height="250"
              style={estiloImagen}
              alt="Descripción de la imagen"
            />
        </div>
    );
  }