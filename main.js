const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value=number
}

const numbers=document.querySelectorAll(".number")

let prevInput='0'
let calOperator= ''
let currentInp='0'

const inputNumber = (number)=>{
	if(currentInp==='0'){
		currentInp=number
	} else {
		currentInp=currentInp+number
	}
}

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentInp)
	})
})

const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    prevInput = currentInp
    calculationOperator =  operator
    updateScreen(operator)
    currentInp = '0'
}
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentInp)
})

const calculate = () => {
    let result = 0
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInp)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInp)
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInp)
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInp)
            break
	case '%':
            result = (parseInt(prevInput)/100)*parseInt(currentInp)
            break
        default:
            return
    }
    currentInp = result.toString()
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('Clear')
})

const clearAll = () => {
    prevInput = '0'
    calculationOperator = ''
    currentInp = '0'
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInp)
})