const scrollToTopButton = document.getElementById("scrollToTop");

        window.onscroll = function () {
            scrollToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        };

        scrollToTopButton.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };