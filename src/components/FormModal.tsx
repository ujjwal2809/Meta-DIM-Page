<form id="myForm">
    <input type="text" id="firstName" placeholder="First Name" required>
    <input type="text" id="lastName" placeholder="Last Name" required>
    <input type="tel" id="phoneNumber" placeholder="Phone Number" required>
    <input type="email" id="email" placeholder="Email Address">
    <input type="text" id="experience" placeholder="Experience" required>
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        email: document.getElementById("email").value,
        experience: document.getElementById("experience").value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbz-kyMtFdGrxITVhpuVk3xo7j7t9iArbuayv-WMN-pliZo2CUCpsxHVcKYi9Zub82JePQ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Form submitted successfully!");
            e.target.reset();
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        alert("Request failed: " + error);
    }
});
</script>
