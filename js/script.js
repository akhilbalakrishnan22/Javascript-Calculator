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
 * currently here the "upperDat, lowerData" are not using. It uses when the expression nee to be
 * moved to the upper value.And the result will be displayed in the lower value.But now both the
 * expression and result are showing in the lower value.
 */

// let upperData = document.getElementById("upper_value");
// let lowerData = "";
let data = document.getElementById("lower_value");


/** 
 * Function to clear both upper value and lower value 
 */
function clearAll() {
    // upperData.innerText = "";
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
 */
function calc() {
    try {
        data.value = eval(data.value);
    }
    catch (err) {
        alert("Invalid");
    }
}