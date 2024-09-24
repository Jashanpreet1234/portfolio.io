// Initializing variables for smooth scroll
var current = 0;
var target;


// Function to empty the skill bar
function empty_bar(n) {
    let skill = document.querySelectorAll('#skills #skill-set .skill-percent div');
    skill[n].style.width = "0%";
}

// Function to fill the skill bar
function start_filling(n) {
    let skill = document.querySelectorAll('#skills #skill-set .skill-percent div');
    let percent = skill[n].getAttribute('data-percent');
    let width = 0;

    // Using requestAnimationFrame for smoother animation
    function fill() {
        if (width < percent) {
            width += 2; // Adjust speed here
            skill[n].style.width = width + "%";
            requestAnimationFrame(fill);
        }
    }
    requestAnimationFrame(fill);
}

// Handling scroll-based skill animation
var skill_fillers = document.querySelectorAll("#skills #skill-set .skill-percent");

function start_animation() {
    for (let bar = 0; bar < skill_fillers.length; bar++) {
        let position = skill_fillers[bar].getBoundingClientRect();
        if (skill_fillers[bar].getAttribute("fill") == "false" && position.top <= window.innerHeight) {
            start_filling(bar);
            skill_fillers[bar].setAttribute("fill", "true");
        } else if (position.top > window.innerHeight) {
            skill_fillers[bar].setAttribute("fill", "false");
            empty_bar(bar);
        }
    }
}

window.addEventListener("scroll", start_animation);

// Adding smooth scrolling when clicking on navigation links
var anchor = document.querySelectorAll(".nav-menu a");

anchor.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").slice(1);
        let targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth" // Uses browser's native smooth scrolling
        });
    });
});

// Mobile navigation menu open/close functions
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".mobile-sn");

function openMenu() {
    mobileMenu.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    menuClose.style.color = "white";
    logo.style.color = "white";
}

function closeMenu() {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    mobileMenu.style.display = "none";
    header.style.background = "white";
    logo.style.color = "black";
}

menuOpen.onclick = openMenu;
menuClose.onclick = closeMenu;

// Typed.js instance for typing effect
const typed = new Typed(".typing", {
    strings: ["“Those who work hard, work alone. Those who work smart, work as a team.” -Utibe Samuel Mbom"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// Smooth scroll helper function
function smoothScroll(element) {
    var position = element.getBoundingClientRect();
    if (position.top <= 0) {
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0, 50);
}

var targetSec2 = document.querySelectorAll('#menu #droplist .redirect');
var scrollInterval;

for (var i = 0; i < targetSec2.length; i++) {
    targetSec2[i].addEventListener('click', function(event) {
        event.preventDefault();
        var section = this.textContent.trim().toLowerCase();
        var element = document.getElementById(section);
        scrollInterval = setInterval(function() {
            smoothScroll(element);
        }, 20);
    });
}
