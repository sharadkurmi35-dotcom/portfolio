



const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
});



emailjs.init({
    publicKey: "I-zf9H1GXif9zikPX"
});



const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_hw52q1l",
        "template_i8ijnud",
        this
    )
    .then(function () {
        alert("Message sent successfully! ✅");
        contactForm.reset();
    })
   .catch(function (error) {
    console.log("EMAILJS ERROR:", error);
    alert("Message not sent ❌\n" + JSON.stringify(error));
});
});