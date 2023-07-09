import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [input,setinput] = useState('');

  const calculateResult = (input) => {

    try{
      const operators = ['+','-','*','/'];
      let operator = null;

      for(let i=0; i<input.length;i++){
        if(operators.includes(input[i])){
          operator = input[i];
          break;
        }
      }

       if(!operator){
        setinput(parseFloat(input).toString());
        return;
       }

      const [operand1,operand2] = input.split(operator).map(parseFloat);
      let result;

      switch(operator) {
        case '+':
          result = operand1+ operand2;
          break;
          case '-':
          result = operand1- operand2;
          break;
          case '*':
          result = operand1* operand2;
          break;
          case '/':
          result = operand1/ operand2;
          break;
          default:
            throw new Error('Invalid operator')
      }

      setinput(result.toString());
    }
    catch(error){
      setinput('Error')
    }
  }

  const handlebutton = (value)=>{
    if(value==='C')
    {
      setinput('');
    }
    else if(value==='<')
    {
      setinput(input.slice(0,-1))
    }
    else if(value==='=')
    {
      calculateResult(input);
    }

    else {
      setinput((preValue)=>preValue+value)
    }
  }

  return (
    <div className='Calculator'>
      <div className='Calc'>
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={() => handlebutton('C')}>C</button>
          <button onClick={() => handlebutton('<')}>&lt;</button>
          <button onClick={() => {
            handlebutton('%')
          }}>%</button>
          <button onClick={() => {
            handlebutton('/')}}>/</button>
        </div>
        <div>
          <button onClick={() => {
            handlebutton('7')}}>7</button>
          <button onClick={() => {
            handlebutton('8')}}>8</button>
          <button onClick={() => {
            handlebutton('9')}}>9</button>
          <button onClick={() => {
            handlebutton('*')}}>*</button>
        </div>
        <div>
          <button onClick={() => {
           handlebutton('4')}}>4</button>
          <button onClick={() => {
            handlebutton('5')}}>5</button>
          <button onClick={() => {
            handlebutton('6')}}>6</button>
          <button onClick={() => {
            handlebutton('-')}}>-</button>
        </div>
        <div>
          <button onClick={() => {
            handlebutton('1')}}>1</button>
          <button onClick={() => {
            handlebutton('2')}}>2</button>
          <button onClick={() => {
            handlebutton('3')}}>3</button>
          <button onClick={() => {
            handlebutton('+')}}>+</button>
        </div>
        <div>
          <button onClick={() => {
           handlebutton('0')}}>0</button>
          <button onClick={() => {
            handlebutton('00')}}>00</button>
          <button onClick={() => {
            handlebutton('.')}}>.</button>
          <button onClick={() => {
           handlebutton('=')}}>=</button>
        </div>



      </div>
    </div>
  )
}

export default App
