import cardsTemp from './templates/template.hbs';
import cards from './menu.json';

import './styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  menu: document.querySelector('.menu_js-menu'),
  switchTogle: document.querySelector('#theme-switch-toggle'),
  bodyTheme: document.querySelector('body'),
};
refs.menu.insertAdjacentHTML('beforeend', cardsTemp(cards));

refs.switchTogle.addEventListener('change', onSwitchChange);

function onSwitchChange() {
  const a = Theme.LIGHT;
  const b = Theme.DARK;
  onDarkTheme(a, b);
  onLightTheme(a, b);
}
function onDarkTheme(a, b) {
  if (refs.switchTogle.checked) {
    refs.bodyTheme.classList.remove(a);
    refs.bodyTheme.classList.add(b);
    localStorage.setItem('theme', b);
  }
}

function onLightTheme(a, b) {
  if (!refs.switchTogle.checked) {
    refs.bodyTheme.classList.remove(b);
    refs.bodyTheme.classList.add(a);
    localStorage.setItem('theme', a);
  }
}
const savedData = localStorage.getItem('theme') || Theme.LIGHT;
refs.bodyTheme.classList.add(savedData);
refs.switchTogle.checked = savedData === Theme.DARK;
