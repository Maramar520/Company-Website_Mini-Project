document.getElementById("msg").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var nama = document.getElementById("input-nama").value;
    var tanggalLahir = document.getElementById("input-ttl").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById("input-msg").value;

    // Display the input values
    // Perform validation
    var isValid = true;
    var validationMessage = "";

    if (nama.trim() === "") {
        isValid = false;
        validationMessage += "Nama : Nama harus diisi.<br>";
    }

    if (tanggalLahir.trim() === "") {
        isValid = false;
        validationMessage += "TTL : Tanggal lahir harus diisi.<br>";
    }

    if (!gender) {
        isValid = false;
        validationMessage += "Jenis Kelamin : Jenis kelamin harus dipilih.<br>";
    }

    if (message.trim() === "") {
        isValid = false;
        validationMessage += "Pesan : Pesan harus diisi.<br>";
    }

    // Display the input values or show validation errors
    var result = document.getElementById("result");
    if (isValid) {
        result.innerHTML = `
            <p align="left">Nama: ${nama}<br>
            TTL: ${tanggalLahir}<br>
            Jenis Kelamin: ${gender}<br>
            Pesan: ${message}</p>
        `;
    } else {
        result.innerHTML = `<p align="left" style="color: red;">${validationMessage}</p>`;
    }
});

// Define the slide duration and interval
var slideDuration = 5000; // 5 seconds
var slideInterval;

// Start the slide animation
function startSlideAnimation() {
    var slides = document.getElementsByClassName("hero-slide");
    var totalSlides = slides.length;
    var currentSlideIndex = 0;

    function showNextSlide() {
        // Hide the current slide
        slides[currentSlideIndex].classList.remove("active");

        // Move to the next slide
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;

        // Show the next slide
        slides[currentSlideIndex].classList.add("active");
    }

    // Initially show the first slide
    slides[currentSlideIndex].classList.add("active");

    // Set the interval for slide animation
    slideInterval = setInterval(showNextSlide, slideDuration);
}

// Call the function to start the slide animation
startSlideAnimation();
