import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyCheckbox from './component/Atoms/checkbox';

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <div className="App">
      <MyCheckbox
        label="My Checkbox"
        checked={isChecked}
        onChange={handleOnChange}
        color="primary"
        disabled={false}
      />
      <p>
      {
        isChecked?`checkbox is checked`:`checkedbox is not checked`
      }
      </p>
    </div>
  );
}

export default App;
