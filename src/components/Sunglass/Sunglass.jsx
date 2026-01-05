import React, { useEffect } from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../utils/Calculate';
// import add from '../../utils/Calculate';

const Sunglass = () => {
  const first = 55;
  const second = 199;
  const sum = add(first, second);
  const mul = multiply(first, second);
  const vaag = divide(first, second);

  useEffect();
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;