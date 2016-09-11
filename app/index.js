import 'whatwg-fetch';

const toggleListeners = document.querySelectorAll('[toggles]');

Array.from(toggleListeners).forEach((listener) => {
  listener.addEventListener('click', () => {
    const target = document.querySelector(listener.getAttribute('toggles-target'));
    target.classList.toggle(listener.getAttribute('toggles-class'));
  });
});
