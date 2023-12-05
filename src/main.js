// DOM elements
const buttonsContainer = document.querySelector('.buttons');
const screen = document.querySelector('.display');

// util
const calculateResult = (expr) => {
    try {
        return Function('return ' + expr)();
    } catch (error) {
        return 'Error';
    }
};

// handler
const buttonClickHandler = (e) => {
    const btnValue = e.target.textContent;

    switch (btnValue) {
        case '=':
            screen.value = calculateResult(screen.value);
            break;
        case 'AC':
            screen.value = '0';
            break;
        case 'DEL':
            screen.value = screen.value.slice(0, -1);
            break;
        default:
            screen.value += btnValue;
            break;
    }
};

// event
buttonsContainer.addEventListener('click', buttonClickHandler);
