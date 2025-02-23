document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("product-image").src = this.dataset.image;
    });
});
