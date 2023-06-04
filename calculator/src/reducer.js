export const reducer = (state, action) => {
    if (action.type === "CHANGE_OPERATOR") {
        return { ...state, operator: action.payload }
    }
    else if (action.type === "OPERATION_ON_CHANGE_OPERATOR") {
        const prev = Number.parseFloat(state.previousOperand);
        const curr = Number.parseFloat(state.currentOperand);
        if (state.operator === '÷') {
            return { ...state, currentOperand: '', operator: action.payload, previousOperand: (prev / curr).toFixed(2) }
        }
        else if (state.operator === 'X') {
            return { ...state, currentOperand: '', operator: action.payload, previousOperand: prev * curr }
        }
        else if (state.operator === '+') {
            return { ...state, currentOperand: '', operator: action.payload, previousOperand: prev + curr }
        }
        else if (state.operator === '-') {
            return { ...state, currentOperand: '', operator: action.payload, previousOperand: prev - curr }
        }
    }
    else if (action.type === "SET_OPERATOR") {
        return { ...state, previousOperand: state.currentOperand, currentOperand: '', operator: action.payload }
    }
    else if (action.type === "CONCATENATING_CURRENT_OPERAND") {
        return { ...state, currentOperand: state.currentOperand + action.payload }
    }
    else if (action.type === "DELETING_LAST_ENTRY") {
        let temp = "";
        let str = state.currentOperand.toString();
        if (str.length !== 0 && str !== undefined) {
            temp = str.slice(0, str.length - 1);
        }
        return { ...state, currentOperand: temp }
    }
    else if (action.type === "DELETE_ALL") {
        return { currentOperand: '', operator: '', previousOperand: '' }
    }
    else if (action.type === "DISPLAY_RESULT") {
        const prev = Number.parseFloat(state.previousOperand);
        const curr = Number.parseFloat(state.currentOperand);
        if (state.operator === '÷') {
            return { ...state, previousOperand: '', operator: '', currentOperand: (prev / curr).toFixed(2) }
        }
        else if (state.operator === 'X') {
            return { ...state, previousOperand: '', operator: '', currentOperand: prev * curr }
        }
        else if (state.operator === '+') {
            return { ...state, previousOperand: '', operator: '', currentOperand: prev + curr }
        }
        else if (state.operator === '-') {
            return { ...state, previousOperand: '', operator: '', currentOperand: prev - curr }
        }
    }
}