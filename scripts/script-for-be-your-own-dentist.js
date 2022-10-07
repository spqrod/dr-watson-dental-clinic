const animation = bodymovin.loadAnimation({
    container: document.getElementById(`animation-container`),
    path: `../graphics/animations/be-your-own-dentist.json`,
    renderer: 'svg',
    loop: true,
    autoplay: true,
});
