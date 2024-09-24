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
            width += 1; // Adjust speed here
            skill[n].style.width = width + "%";
            requestAnimationFrame(fill);
        } else {
            skill[n].style.width = percent + "%"; // Ensure it fills to the exact percentage
        }
    }
    requestAnimationFrame(fill);
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Handling scroll-based skill animation
var skill_fillers = document.querySelectorAll("#skills #skill-set .skill-percent");

function start_animation() {
    for (let bar = 0; bar < skill_fillers.length; bar++) {
        let skill_bar = skill_fillers[bar];
        let skill_div = skill_bar.querySelector('div');

        if (isInViewport(skill_bar)) {
            if (!skill_bar.classList.contains("filled")) {
                start_filling(bar);
                skill_bar.classList.add("filled");
            }
        } else {
            if (skill_bar.classList.contains("filled")) {
                empty_bar(bar);
                skill_bar.classList.remove("filled");
            }
        }
    }
}

// Trigger the animation on page load
window.addEventListener("load", start_animation);

// Trigger the animation on scroll
window.addEventListener("scroll", start_animation);

// Smooth scrolling for navigation links
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
    // Assuming 'header' is defined elsewhere
    // header.style.background = "white";
    logo.style.color = "black";
}

menuOpen.onclick = openMenu;
menuClose.onclick = closeMenu;

// Typed.js instance for typing effect
const typed = new Typed(".typing", {
    strings: ["“Those who work hard, work alone. Those who work smart, work as a team.” - Utibe Samuel Mbom"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
