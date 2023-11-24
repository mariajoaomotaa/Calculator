document.addEventListener("DOMContentLoaded", function () {
    let answer = document.querySelector('.answer');
    let currentInput = document.querySelector('.currentInput');
    let buttons = document.querySelectorAll('button');
    let clear = document.querySelector('#clear');
    let sim = document.querySelector('#sim');
    let porcent = document.querySelector('#porcent');
    let evaluate = document.querySelector('#evaluate');
    let currentValue = [''];

    //Botão para apagar
    clear.addEventListener("click", () => {
        currentValue = [' '];
        answer.innerHTML = '0';
        updateDisplay();
    });

    //Botão de simetria
    sim.addEventListener ("click", () => {
        let str = currentValue.join('');
        let currentValueNumber = eval(str);
        let simetric = currentValueNumber * -1;
        currentValue = [simetric.toString()];
        updateDisplay();
    });

    //Botão de percentagem
    porcent.addEventListener ("click", () => {
        try {
            let currentValueNumeric = eval(currentValue.join(''));
            let percentValue = currentValueNumeric / 100;
            currentValue = [percentValue];
            currentInput.innerHTML = percentValue.toString() + '%';
            answer.innerHTML = percentValue.toString() + '%';
        } catch (error) {
            currentInput.innerHTML = 'Error';
            answer.innerHTML = '';
            currentValue = [''];
        }
    });

    //Botões numéricos e operações
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains('number') || btn.value === '.') {
                currentValue.push(btn.value);
                updateDisplay();
            }

            if (btn.classList.contains('op')) {
                currentValue.push(' ' + btn.value + ' ');
                updateDisplay();
            }

            if (btn.id === 'evaluate') {
                evaluateExpression();
            }
        });
    });

    //Mostrar o resultado
    function updateDisplay() {
        currentInput.innerHTML = currentValue.join('');
    }

    //Efetuar os cálculos
    function evaluateExpression() {
        try {
            let result = eval(currentValue.join(''));
            currentInput.innerHTML = result;
            answer.innerHTML = result;
            currentValue = [result.toString()];
        } catch (error) {
            currentInput.innerHTML = 'Error';
            answer.innerHTML = '';
            currentValue = [''];
        }
    }
});
