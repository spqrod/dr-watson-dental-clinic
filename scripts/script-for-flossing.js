const animation = bodymovin.loadAnimation({
    container: document.getElementById(`animation-container`),
    path: `../graphics/animations/flossing.json`,
    renderer: 'svg',
    loop: true,
    autoplay: true,
});
