function observe() {
    const zoomBox = document.querySelector('.content-zoom-box img');
    const explainImagesBox = document.querySelector('.explain-area-images');
    const options = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    }


    if (zoomBox) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomBox.classList.add('active');
                    setTimeout(() => {
                        zoomBox.parentElement.scroll({ top: 600, behavior: "smooth" })
                        window.removeEventListener("scroll", observe)
                        obs.disconnect()
                    }, 500)

                }
            });
        }, options);
        observer.observe(zoomBox);
        return
    }
    if (explainImagesBox) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(explainImagesBox.scrollWidth);
                    explainImagesBox.scroll({ left: explainImagesBox.scrollWidth, behavior: "smooth" })
                    obs.disconnect()
                }
            });
        }, options);
        observer.observe(explainImagesBox);
        return
    }
}

window.addEventListener("scroll", observe, { once: true })
