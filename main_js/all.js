// global variables
let darkMode = localStorage.getItem("darkMode");
let moon_icon = document.querySelector("#moon_svg");

// adds the darkmode class to the body and localstorage
function darkModeAdd() {
    document.body.classList.add("dark_mode");
    localStorage.setItem("darkMode", "enabled");
}

// removes the darkmode class to the body and localstorage
function darkModeRemove() {
    document.body.classList.remove("dark_mode");
    localStorage.setItem("darkMode", null);
}

// loads all the functions
function loadHandler(){
    moon_icon = document.querySelector("#moon_svg");

    // makes the state of the page (dark/light) stay even after refreshing
    if(darkMode === "enabled") {
        darkModeAdd();
    }

    moon_icon.addEventListener("click", () => {
        // to update the darkmode variable in the localstorage
        darkMode = localStorage.getItem("darkMode");

        // if statement that executes the darkmode function
        if(darkMode !== "enabled") {
            darkModeAdd();
        } else {
            darkModeRemove();
        }
    });

}

window.addEventListener("load", loadHandler);