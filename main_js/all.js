var moon_icon = document.getElementById("moon_svg");

moon_icon.onclick = function() {
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")) {
        moon_icon.src = "svg/sun_icon.svg";
    }
    else {
        moon_icon.src = "svg/moon_icon.svg";
    }
}