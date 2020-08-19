function setVHCssCustomProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--sgbp-vh', `${vh}px`);
}

setVHCssCustomProperty();
window.addEventListener('resize', setVHCssCustomProperty);
