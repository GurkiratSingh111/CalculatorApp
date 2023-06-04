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

  const onClickSetOperator = (e) => {
    if (state.operator !== '' && state.currentOperand === '' && state.previousOperand !== '') {
      dispatch({ type: "CHANGE_OPERATOR", payload: e.target.value })
    }
    else if (state.operator !== '' && state.currentOperand !== '' && state.previousOperand !== '') {
      dispatch({ type: 'OPERATION_ON_CHANGE_OPERATOR', payload: e.target.value })
    }
    else {
      dispatch({ type: "SET_OPERATOR", payload: e.target.value })
    }
  }
  const onClickSetOperand = (e) => {
    dispatch({ type: 'CONCATENATING_CURRENT_OPERAND', payload: e.target.value })
  }
  const clearLastEntry = () => {
    dispatch({ type: "DELETING_LAST_ENTRY" });
  }
  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  }
  const setResult = () => {
    if (state.previousOperand !== '' && state.currentOperand !== '' && state.operator !== '') {
      dispatch({ type: "DISPLAY_RESULT" })
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