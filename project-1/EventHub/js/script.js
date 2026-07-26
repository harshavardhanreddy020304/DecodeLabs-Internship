/* ==========================================
        MOBILE NAVIGATION
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ==========================================
        STICKY NAVBAR SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* ==========================================
        EVENT SEARCH
========================================== */

const searchInput = document.querySelector(".search-box input");

const eventCards = document.querySelectorAll(".event-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    eventCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


/* ==========================================
        FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});


/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#4F46E5;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
        NEWSLETTER VALIDATION
========================================== */

const subscribeBtn = document.querySelector(".newsletter button");

const emailInput = document.querySelector(".newsletter input");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    if (!email.includes("@")) {

        alert("Enter a valid email.");

        return;

    }

    alert("🎉 Thank you for subscribing!");

    emailInput.value = "";

});


/* ==========================================
        BUTTON HOVER EFFECT
========================================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/* ======================================
CONTACT FORM VALIDATION
====================================== */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill all required fields.");

            return;

        }

        alert("✅ Thank you! Your message has been sent.");

        contactForm.reset();

    });

}