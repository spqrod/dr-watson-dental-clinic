  for (let i = 1; i < 9; i++) {
    const animation = bodymovin.loadAnimation({
        container: document.getElementById(`animation-container-${i}`),
        path: `../graphics/animations/${i}.json`,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
  }