import { useState } from 'react';
import axios from 'axios';

const StkPushForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !amount) {
      setError('Please fill in both fields.');
      return;
    }

    // Reset error and message
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post(
        "https://85c7-129-222-147-225.ngrok-free.app/invoices",
        {
          invoice: {
            phone_number: phoneNumber,
            amount: parseFloat(amount),
          },
        }
      );

      // Handle successful response
      setMessage('Payment initiated successfully!');
      console.log('STK Push response:', response.data.stk_push_response);

      // Optionally, display the response from the backend
      setMessage(`Payment initiated! CheckoutRequestID: ${response.data.stk_push_response.CheckoutRequestID}`);
    } catch (error) {
      // Handle error response
      setError('Failed to initiate payment. Please try again.');
      console.error('Error initiating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stk-push-form">
      <h2>PayStream App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="2547XXXXXXXX"
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Make Payment'}
          </button>
        </div>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default StkPushForm;
