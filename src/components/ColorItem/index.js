import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { FaCopy } from 'react-icons/fa'

function ColorItem({ cor }) {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <Container 
      onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(cor)
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        bgc={cor}
      >
      
      {alert && <FaCopy/>}

    </Container>
  );
}

export default ColorItem;