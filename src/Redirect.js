// src/components/Redirect.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const path = query.get('p');
    if (path) {
      navigate(path);
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default Redirect;
