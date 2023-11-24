// src/components/PaymentForm.js

import { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [error] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    // Simular el procesamiento del pago
    setTimeout(() => {
      console.log('Pago procesado con éxito');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Espacio para el logo */}
      <div className="h-16 w-full bg-gray-200 mb-4">
        {/* Coloca tu logo aquí */}
      </div>

      <div className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Card number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border p-3 rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Expiration date
            </label>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full border p-3 rounded"
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              CVV
            </label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              className="w-full border p-3 rounded"
              placeholder="123"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 font-bold mb-4" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
