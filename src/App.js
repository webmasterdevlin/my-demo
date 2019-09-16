import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import ImChild from './components/ImChild';
import MyInput from './components/MyInput';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Person/>
      <ImChild xxx="Dave" />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      }}>
         <MyInput label="age" />
    </div>
    <Employee />
    </div>
  );
}

export default App;




