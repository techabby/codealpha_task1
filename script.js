let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let isResultShown = false;

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            isResultShown = true;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            if (isResultShown) {
                string = "";
                isResultShown = false;
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});