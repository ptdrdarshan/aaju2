/*========================================
MOBILE MENU TOGGLE
========================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/*========================================
STICKY HEADER ON SCROLL
========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }
});

/*========================================
SMOOTH SCROLL ACTIVE NAV LINKS
========================================*/

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

/*========================================
SCROLL ANIMATION (REVEAL EFFECT)
========================================*/

const revealElements = document.querySelectorAll(
    ".service-card, .member, .review, .gallery img, .about-text, .about-image"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

/*========================================
INITIAL STATE FOR ANIMATION
========================================*/

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});

/*========================================
SMOOTH SCROLL FOR ALL LINKS
========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/*========================================
FORM SUBMISSION (DEMO ALERT)
========================================*/

const form = document.querySelector(".contact form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("🎉 Appointment request sent successfully! We will contact you soon.");

        form.reset();
    });
}

/*========================================
GALLERY CLICK ZOOM EFFECT
========================================*/

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");
        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";
        image.style.boxShadow = "0 10px 40px rgba(0,0,0,0.6)";

        overlay.appendChild(image);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });
});

/*========================================
AUTO ACTIVE NAV (ON SCROLL)
========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});