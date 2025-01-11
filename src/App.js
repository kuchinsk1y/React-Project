import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    alert(`You entered: ${text}`);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>React Components Demo</h1>
        <Input placeholder="Type something..." onChange={handleInputChange} />
        <Button text="Submit" onClick={handleButtonClick} />
      </div>
  );
};

export default App;