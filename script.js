window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mode-toggle');
  const icon = document.querySelector('.slider i');
  const darkVideo = document.getElementById('dark-video');
  const lightVideo = document.getElementById('light-video');

  function switchVideos(newVideo, oldVideo) {
    newVideo.classList.add('active');
    newVideo.style.opacity = '0.8';

    oldVideo.style.opacity = '0';
    oldVideo.classList.remove('active');
  }

  
  if (document.body.classList.contains('light')) {
    switchVideos(lightVideo, darkVideo);
    icon.classList.replace('fa-moon', 'fa-sun');
    toggle.checked = true;
  } else {
    switchVideos(darkVideo, lightVideo);
    icon.classList.replace('fa-sun', 'fa-moon');
    toggle.checked = false;
  }

 
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      switchVideos(lightVideo, darkVideo);
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      switchVideos(darkVideo, lightVideo);
    }
  });
});
