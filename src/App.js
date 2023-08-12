import React, { useState } from 'react';
import "./App.css";
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [result, setResult] = useState('');
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  function handleAdd() {
    if (handleInput()) {
      setResult(parseFloat(num1) + parseFloat(num2));

    } else {
      setResult('');
    }
  }

  function handleSubtract() {
    if (handleInput()) {
      setResult(parseFloat(num1) - parseFloat(num2));

    } else {
      setResult('');
    }
  }

  function handleMultiply() {
    if (handleInput()) {
      setResult(parseFloat(num1) * parseFloat(num2));

    } else {
      setResult('');
    }
  }

  function handleDevider() {
    if (handleInput()) {
      setResult(parseFloat(num1) / parseFloat(num2));

    } else {
      setResult('');
    }
  }

  const handleInput = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setMessageError("Num1 Cannot Be Empty");
      setMessageSuccess('');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setMessageError('Invalid input. Please enter valid numbers.');
      setMessageSuccess('');
      return false;
    }

    setMessageError('');
    setMessageSuccess('Success');
    return true;
  };

  return (
    <div className='app'>
      <div className='container'>
      <div>
        <h1 className='heading'>React Calculator</h1>
      </div>
      <div className='input-div'>
      <input type='text' value={num1} placeholder='Num1' onChange={(e) => setNum1(e.target.value)} />
      <input type='text' value={num2} placeholder='Num2' onChange={(e) => setNum2(e.target.value)} />
      </div>
      
      <div className='btn-div'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDevider}>/</button>
      </div>
      {messageError && (
        <div className='errorMessage'>
          <p className='error'>Error!</p>
          {messageError}
        </div>
      )}

      {messageSuccess && (
        <div className='success'>
          {messageSuccess}!
        </div>
      )}

      {result !== '' && (
        <div className='result'>
          Result =    {result}
        </div>
      )}


      </div>
      
      
    </div>
  );
}

export default App;
