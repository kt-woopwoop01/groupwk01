function observe() {
    const image = document.querySelector('.content-zoom-box img');
    console.log(image);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('active');
                setTimeout(() => image.parentElement.scroll({ top: 600, behavior: "smooth" }), 500)

            }
        });
    }, {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    });

    observer.observe(image);
}

addEventListener("scroll", observe)
