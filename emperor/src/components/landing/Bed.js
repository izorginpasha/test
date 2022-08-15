import React from 'react';
import bedPath from '../images/bed.png'; // Путь к изображению внутри сборки
function Bed() {
  return (
      <img alt='A comfortable bed'src={bedPath}/>
  );
}

export default Bed;