import "./styles.css"
import { useReducer, useState } from "react";

// const ACTION = {
//   ADD_DIGIT: 'add_digits',
//   clear: 'clear'
// }
// function reducer(state, { type, payload }) {



// }
function App() {
  // const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operator, setOperator] = useState('');

  const onClickSetOperator = (e) => {
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
    setOperator(e.target.value);
  }
  const onClickSetOperand = (e) => {
    setCurrentOperand((prev) => {
      return prev + e.target.value;
    })
  }
  const clearLastEntry = () => {
    setCurrentOperand((prev) => {
      const str = prev.slice(0, prev.length - 1);
      return str;
    })
  }
  const deleteAll = () => {
    setCurrentOperand('');
    setOperator('');
    setPreviousOperand('');
  }
  const setResult = () => {
    const prev = Number.parseFloat(previousOperand);

    const curr = Number.parseFloat(currentOperand);
    if (operator === '/') {
      setCurrentOperand(prev / curr);
    }
    else if (operator === '*') {
      setCurrentOperand(prev * curr);
    }
    else if (operator === '+') {
      setCurrentOperand(prev + curr);
    }
    else if (operator === '-') {
      setCurrentOperand(prev - curr);
    }
    setPreviousOperand('');
    setOperator('')
  }
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand}{operator}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two' onClick={clearLastEntry}>AC</button>
      <button onClick={deleteAll}>DEL</button>
      <button onClick={onClickSetOperator} value="/">/</button>
      <button onClick={onClickSetOperand} value="1">1</button>
      <button onClick={onClickSetOperand} value="2">2</button>
      <button onClick={onClickSetOperand} value="3">3</button>
      <button onClick={onClickSetOperator} value="*">*</button>
      <button onClick={onClickSetOperand} value="4">4</button>
      <button onClick={onClickSetOperand} value="5">5</button>
      <button onClick={onClickSetOperand} value="6">6</button>
      <button onClick={onClickSetOperator} value="+">+</button>
      <button onClick={onClickSetOperand} value="7">7</button>
      <button onClick={onClickSetOperand} value="8">8</button>
      <button onClick={onClickSetOperand} value="9">9</button>
      <button onClick={onClickSetOperator} value="-">-</button>
      <button onClick={onClickSetOperand} value=".">.</button>
      <button onClick={onClickSetOperand} value="0">0</button>
      <button className='span-two' onClick={setResult}>=</button>
    </div>);
}

export default App;