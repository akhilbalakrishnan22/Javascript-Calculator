/** Themes files */
let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

/** Function to load the style sheet in order to  achieve dark mode. */
function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == lightTheme) {
        theme.href = darkTheme;
        darkMode.innerHTML = "Light 🌞";
    } else {
        theme.href = lightTheme;
        darkMode.innerHTML = "Dark 🌙";
    }
}