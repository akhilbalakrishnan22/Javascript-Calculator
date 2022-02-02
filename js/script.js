let checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change', function () {
    if (this.checked)
        document.documentElement.setAttribute('data-theme', 'dark');
    else
        document.documentElement.setAttribute('data-theme', 'light');
});

let upperData = document.getElementById('upper_value');
let lowerData = "";
let data = document.getElementById('lower_value');

function clearAll() {
    upperData.innerHTML = "";
    data.innerHTML = "";
}

function del() {
    data.innerHTML = data.innerHTML.slice(0, -1)
}

// function display(_num) {
//     lowerData += _num;
//     switch (_num) {
//         case '+':
//             upperData.innerHTML = lowerData;
//             lowerData = "";
//         case '-':
//             upperData.innerHTML = lowerData;
//             lowerData = "";
//         case '*':
//             upperData.innerHTML = lowerData;
//             lowerData = "";
//         case '/':
//             upperData.innerHTML = lowerData;
//             lowerData = "";
//         case '%':
//             upperData.innerHTML = lowerData;
//             lowerData = "";
//         default:
//             data.innerHTML = lowerData;
//     }
// }

// function calc() {
//     upperData.innerHTML += data.innerHTML;
//     try {
//         data.innerHTML = eval(upperData.innerHTML);
//     }
//     catch (err) {
//         alert('Invalid');
//     }
// }