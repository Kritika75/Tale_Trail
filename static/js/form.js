document.getElementById("story-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const theme = document.getElementById("theme").value;
    const content = document.getElementById("content").value;

    if (title && theme && content) {
        alert("Story submitted! Thank you for contributing.");
        // Clear form fields after submission
        document.getElementById("story-form").reset();
    } else {
        alert("Please fill out all required fields before submitting.");
    }
});
