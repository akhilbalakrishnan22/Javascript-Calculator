/** 
 * Selecting the input checkbox 
 */
let checkbox = document.querySelector('input[name="theme"]');

/**
 * Through the addEventListener method changing the data-theme of html tag from light to dark.
 * Here, It listens for the specified event (ie, is "change") and when it occurs it invokes the
 * anonymous function which checks for whether checkbox is checked or not, If it checked then
 * changing the data-theme attribute of html tag to dark.
 * <html lang="en" data-theme="dark">....</html>
 * and if its unchecked it will change the data-theme attribute to light
 * <html lang="en" data-theme="light">....</html>
 */
checkbox.addEventListener('change', function () {
    if (this.checked)
        document.documentElement.setAttribute('data-theme', 'dark');
    else
        document.documentElement.setAttribute('data-theme', 'light');
});


/**
 * upperData contains the element <p> element with id="upper_value" & data contains the <input> element 
 * with id="lower_value".
 */

let upperData = document.getElementById("upper_value");
let data = document.getElementById("lower_value");


/** 
 * Function to clear both upper value and lower value 
 */
function clearAll() {
    upperData.innerHTML = "";
    data.value = "";
}

/** 
 * Function to delete data on the lower value one by one.It slices the data. 
 */
function del() {
    data.value = data.value.slice(0, -1)
}

/** 
 * Function to display the value which is clicked by the user 
*/
function display(_val) {
    data.value += _val;
}

/** 
 * Function to evaluate the expression that the user has been entered.The evaluation is carried out
 * inside the try block and if the expression is an invalid it alerts the user the entered expression
 * cannot be evaluated.
 * This function also moving the data.value which is an expression (eg: 6+3) to the upperData.innerHTML.
 * Also whenever an alert occurs with msg invalid after that it clears the display. 
 */
function calc() {
    try {
        upperData.innerHTML = data.value;
        data.value = eval(data.value);
    }
    catch (err) {
        alert("Invalid");
        clearAll()
    }
}