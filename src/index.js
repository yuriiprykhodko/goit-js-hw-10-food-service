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

function onSwitchChange(evt) {
  if (evt.target.checked) {
    refs.bodyTheme.classList.remove(Theme.LIGHT);
    refs.bodyTheme.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.bodyTheme.classList.remove(Theme.DARK);
    refs.bodyTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.switchTogle.checked = true;
  refs.bodyTheme.classList.add(Theme.DARK);
} else {
  refs.switchTogle.checked = false;
  refs.bodyTheme.classList.add(Theme.LIGHT);
}
