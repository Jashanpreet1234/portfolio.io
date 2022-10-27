var current = 0;
var target;

//adding smooth scrolling when clicking on nav target menu
var anchor = document.querySelectorAll(".nav-menu a");

for(var i=0; i<anchor.length; i++){
    anchor[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetSec = this.textContent.trim().toLowerCase();
        var section = document.getElementById(targetSec);
        var r = section.getBoundingClientRect();
        target = r.y;
        current = 0;   
        
        var scrollInterval = setInterval(function()
        {
            if(current >= target){
                clearInterval(scrollInterval);
                return;
            };
    
            current += 50;
            window.scrollBy(0, 50);
            
        } , 20);
    });
}


function smoothScroll(element){
    var position = element.getBoundingClientRect();
    
    if(position.top <= 0){
        clearInterval(scrollInterval);
          return;
    };

    window.scrollBy(0, 50);
};

var targetSec2 = document.querySelectorAll('#menu #droplist .redirect');
var scrollInterval;


for(var i=0; i<targetSec2.length; i++){
    targetSec2[i].addEventListener('click',function(event){
        console.log(targetSec2[i]);
        event.preventDefault();
        var section = this.textContent.trim().toLowerCase();
        var element = document.getElementById(section);


        scrollInterval = setInterval(function(){
            smoothScroll(element);
        },20);
    });
}

//animating skill filling on arriving at the skill div

window.addEventListener("scroll", start_animation); 

//function for emptying div
function empty_bar(n){

    let skill = document.querySelectorAll('#skills #skill-set .skill-percent div');
    skill[n].style.width = "0%";
}

//function for filling div
function start_filling(n){

    let skill = document.querySelectorAll('#skills #skill-set .skill-percent div');
    let percent = skill[n].getAttribute('data-percent');

    let width = 0;
    let interval = setInterval(function(){
        if(width >= percent)
        {
            clearInterval(interval);
            animationDone = true;
            return;
        };
            
        width += 5;
        skill[n].style.width = width + "%";       
        
    }, 70);
   
}

var skill_fillers = document.querySelectorAll("#skills #skill-set .skill-percent");

function start_animation(){
        
    for(let bar=0; bar<skill_fillers.length; bar++)
    {
        let position = skill_fillers[bar].getBoundingClientRect();

        if(skill_fillers[bar].getAttribute("fill")=="false" && position.top <= window.innerHeight)
        {
            start_filling(bar);
            
            skill_fillers[bar].setAttribute("fill", "true");

        }else if(position.top > window.innerHeight)
        {
            skill_fillers[bar].setAttribute("fill", "false");
            empty_bar(bar);
        }
    }

};



const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const mobileMenu = document.querySelector(".mobile-menu")
const logo = document.querySelector(".mobile-sn")

function openMenu(){
    mobileMenu.style.display = "block"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    menuClose.style.color = "white"
    logo.style.color = "white"
}

function closeMenu(){
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
    mobileMenu.style.display = "none"
    header.style.background = "white"
    logo.style.color = "black"
}

menuOpen.onclick = openMenu
menuClose.onclick = closeMenu

const typed = new Typed(".typing",{
    strings: ["“Those who work hard, work alone. Those who work smart, work as a team.” -Utibe Samuel Mbom"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

function myWork(){
    window.location.href = "./mywork.html"
}

function aboutMe(){
    window.location.href = "./about.html"
}

function siteupdate(){
    document.getElementById("warning-display").style.display = 'block';
}

function closeSiteUpdate(){
    document.getElementById("warning-display").style.display = 'none';
}

document.querySelector(".mywork-btn").addEventListener('mouseover', ()=>{
    document.querySelector(".aboutme-btn").style.background = "var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.border = "none";
    document.querySelector(".aboutme-btn").style.color = "white";
    document.querySelector(".mywork-btn").style.background = "white";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "var(--primary-color)";
})

document.querySelector(".mywork-btn").addEventListener('mouseleave', ()=>{
    document.querySelector(".aboutme-btn").style.background = "white";
    document.querySelector(".aboutme-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.color = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.background = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "white";

})

document.querySelector(".aboutme-btn").addEventListener('mouseover', ()=>{
    document.querySelector(".aboutme-btn").style.background = "var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.border = "none";
    document.querySelector(".aboutme-btn").style.color = "white";
    document.querySelector(".mywork-btn").style.background = "white";
    document.querySelector(".mywork-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "var(--primary-color)";
})

document.querySelector(".aboutme-btn").addEventListener('mouseleave', ()=>{
    document.querySelector(".aboutme-btn").style.background = "white";
    document.querySelector(".aboutme-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.color = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.background = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "white";

})







