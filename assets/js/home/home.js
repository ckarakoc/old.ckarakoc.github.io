document.getElementById("home-img-link").addEventListener("click", () => {
    let top = document.getElementById("home-img-top");
    let bot = document.getElementById("home-img-bottom");

    if (top.classList.contains("home-img-animate-in")) {
        top.classList.remove("home-img-animate-in");
        bot.classList.remove("home-img-animate-out");

        top.classList.add("home-img-animate-out");
        bot.classList.add("home-img-animate-in");
    } else {
        top.classList.remove("home-img-animate-out");
        bot.classList.remove("home-img-animate-in");

        top.classList.add("home-img-animate-in");
        bot.classList.add("home-img-animate-out");
    }
});

// Dynamically set the outer div height for the image
document.getElementById("home-img-bottom").addEventListener("load", () => {
    document.getElementById("home-img-outer").style.height = document.getElementById("home-img-bottom").height + "px";
});
