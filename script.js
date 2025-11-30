// Reveal contact details on button click
document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded Successfully");

    const revealBtn = document.getElementById("reveal-contact");
    const contactInfo = document.getElementById("contact-info");

    if (revealBtn && contactInfo) {
        revealBtn.addEventListener("click", function () {
            contactInfo.classList.toggle("show");
        });
    }

    // WhatsApp form sender
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            console.log("Form submitted!");

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const phone = "918279785697";

            const text =
                `New Portfolio Message:%0A` +
                `Name: ${name}%0A` +
                `Email: ${email}%0A` +
                `Message: ${message}`;

            const url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;

            window.location.href = url;
        });
    }
});
