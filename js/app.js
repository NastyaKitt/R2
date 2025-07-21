function checkVisibility() {
  const elements = document.querySelectorAll(
    '.blackKnight, .fourMan, .tableTwo, .tableTwo img, .tableTwo video, ' +
    '.threeText, .tableThree, .tableThree img, .fourItem, .fourItem img, ' +
    '.fourTable, .fourTable img, .tableFive, .tableFive img, .dragons, .fiveBlockButton'
  );
  const windowBottom = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= windowBottom - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);