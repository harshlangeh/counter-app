import React from 'react';
import './App.css';
import Text from './text';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <Text text={"Counter App"}/>
      <Counter/>
    </div>
  );
}

export default App;
