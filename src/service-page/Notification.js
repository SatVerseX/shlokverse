import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for styling

const Notification = ({ message, type }) => {
  React.useEffect(() => {
    if (message) {
      if (type === 'success') {
        toast.success(message);
      } else if (type === 'info') {
        toast.info(message);
      } else if (type === 'error') {
        toast.error(message);
      }
    }
  }, [message, type]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      pauseOnFocusLoss
    />
  );
};

export default Notification;
