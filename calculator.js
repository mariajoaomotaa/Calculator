document.addEventListener("DOMContentLoaded", function () {
    let answer = document.querySelector('.answer');
    let currentInput = document.querySelector('.currentInput');
    let buttons = document.querySelectorAll('button');
    let clear = document.querySelector('#clear');
    let evaluate = document.querySelector('#evaluate');
    let currentValue = [''];

    clear.addEventListener("click", () => {
        currentValue = [''];
        updateDisplay();
    });

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains('number')) {
                currentValue.push(btn.value);
                updateDisplay();
            }

            if (btn.id === 'evaluate') {
                evaluateExpression();
            }
        });
    });

    function updateDisplay() {
        currentInput.innerHTML = currentValue.join('');
    }

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
