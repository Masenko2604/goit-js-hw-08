import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoPlayer = document.getElementById('vimeo-player');

if (typeof(Storage) !== "undefined") {
 
  videoPlayer.addEventListener('timeupdate', throttle(function() {
    
    localStorage.setItem('videoplayer-current-time', videoPlayer.currentTime);
  }, 1000));  
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
   
    videoPlayer.currentTime = videoPlayer.setCurrentTime(currentTime);
  }
} else {
  alert('Ваш браузер не підтримує локальне сховище.');
}