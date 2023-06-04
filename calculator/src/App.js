import "./styles.css"
import { useReducer } from "react";
import { reducer } from './reducer'
const initialState = {
  currentOperand: '',
  previousOperand: '',
  operator: ''
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [currentOperand, setCurrentOperand] = useState('');
  // const [previousOperand, setPreviousOperand] = useState('');
  // const [operator, setOperator] = useState('');

  const onClickSetOperator = (e) => {
    if (state.operator !== '' && state.currentOperand === '' && state.previousOperand !== '') {
      dispatch({ type: "CHANGE_OPERATOR", payload: e.target.value })
    }
    else if (state.operator !== '' && state.currentOperand !== '' && state.previousOperand !== '') {
      dispatch({ type: 'OPERATION_ON_CHANGE_OPERATOR', payload: e.target.value })

      // const prev = Number.parseFloat(previousOperand);
      // const curr = Number.parseFloat(currentOperand);

      // if (operator === '/') {
      //   setPreviousOperand(prev / curr);
      // }
      // else if (operator === 'X') {
      //   setPreviousOperand(prev * curr);
      // }
      // else if (operator === '+') {
      //   setPreviousOperand(prev + curr);
      // }
      // else if (operator === '-') {
      //   setPreviousOperand(prev - curr);
      // }
      // setOperator(e.target.value);
      // console.log(currentOperand);
      // setCurrentOperand('');
    }
    else {
      dispatch({ type: "SET_OPERATOR", payload: e.target.value })
      // setPreviousOperand(currentOperand);
      // setCurrentOperand('');
      // setOperator(e.target.value);
    }
  }
  const onClickSetOperand = (e) => {
    dispatch({ type: 'CONCATENATING_CURRENT_OPERAND', payload: e.target.value })
    // setCurrentOperand((prev) => {
    //   return prev + e.target.value;
    // })
  }
  const clearLastEntry = () => {
    dispatch({ type: "DELETING_LAST_ENTRY" });
    // setCurrentOperand((prev) => {
    //   let str;
    //   let temp;
    //   str = prev.toString();
    //   if (str.length !== 0) {
    //     temp = str.slice(0, str.length - 1);
    //     return temp;
    //   }
    // })
  }
  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });

    // setCurrentOperand('');
    // setOperator('');
    // setPreviousOperand('');
  }
  const setResult = () => {
    if (state.previousOperand !== '' && state.currentOperand !== '' && state.operator !== '') {
      dispatch({ type: "DISPLAY_RESULT" })
      // const prev = Number.parseFloat(previousOperand);
      // const curr = Number.parseFloat(currentOperand);
      // if (operator === '/') {
      //   setCurrentOperand(prev / curr);
      // }
      // else if (operator === 'X') {
      //   setCurrentOperand(prev * curr);
      // }
      // else if (operator === '+') {
      //   setCurrentOperand(prev + curr);
      // }
      // else if (operator === '-') {
      //   setCurrentOperand(prev - curr);
      // }
      // setPreviousOperand('');
      // setOperator('')
    }
  }
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{state.previousOperand}{state.operator}</div>
        <div className='current-operand'>{state.currentOperand}</div>
      </div>
      <button className='span-two' onClick={deleteAll}>AC</button>
      <button onClick={clearLastEntry}>DEL</button>
      <button onClick={onClickSetOperator} value="÷">÷</button>
      <button onClick={onClickSetOperand} value="1">1</button>
      <button onClick={onClickSetOperand} value="2">2</button>
      <button onClick={onClickSetOperand} value="3">3</button>
      <button onClick={onClickSetOperator} value="X">x</button>
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