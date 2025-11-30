document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "918279785697";  // ← Replace with your number

    const url = `https://wa.me/${whatsappNumber}?text=` + 
                encodeURIComponent(
                    "New Portfolio Message:\n" +
                    "Name: " + name + "\n" +
                    "Email: " + email + "\n" +
                    "Message: " + message
                );

    window.open(url, "_blank");
});
