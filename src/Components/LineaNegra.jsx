import React from 'react';

export default function LineaNegra() {
    const estiloLinea = {
        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '50%',
      };

  return <div style={estiloLinea}></div>;
}