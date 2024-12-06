document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
});