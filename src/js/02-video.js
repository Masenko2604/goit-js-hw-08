import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Отримуємо відеоелемент
const videoPlayer = document.getElementById('vimeo-player');

// Перевіряємо, чи підтримує браузер локальне сховище
if (typeof(Storage) !== "undefined") {
  // Встановлюємо обробник події timeupdate, щоб оновлювати час відтворення
  videoPlayer.addEventListener('timeupdate', _.throttle(function() {
    // Оновлюємо поточний час відтворення у локальному сховищі
    localStorage.setItem('videoplayer-current-time', videoPlayer.currentTime);
  }, 1000)); // Викликаємо функцію не частіше, ніж раз на секунду

  // Перевіряємо, чи є збережений час відтворення
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    // Відновлюємо відтворення з збереженого часу
    videoPlayer.currentTime = currentTime;
  }
} else {
  alert('Ваш браузер не підтримує локальне сховище.');
}