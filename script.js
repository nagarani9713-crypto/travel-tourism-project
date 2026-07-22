// Welcome Message
window.onload = function () {
    console.log("Welcome to Travel & Tourism Website");
};

// Scroll to Top Button
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (topButton) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
};

// Smooth Scroll to Top
if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your booking has been submitted successfully!");
    });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
    });
}

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Successfully subscribed to our newsletter!");
    });
}

// Review Form
const reviewForm = document.getElementById("reviewForm");

if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for sharing your review!");
    });
}