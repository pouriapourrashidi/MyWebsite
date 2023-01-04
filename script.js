const toggleSwitch = document.querySelector('input[type="checkbox"]');
var audioElement=document.getElementById('audio');
const playMusic=document.getElementById('music-link');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('text-box');

let playMusicboalian=false;

function imageColor(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`; 
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 /50%)';
    // textbox.style.backgroundColor = 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageColor('dark');
}

function lightMode(){
    nav.style.backgroundColor='rgb(255 255 255 /50%)';
    // textbox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageColor('light');
}

function checkMusic()
{
    if (!playMusicboalian){
        audioElement.play();
        const img = document.createElement('i');
        img.setAttribute('class',"fa-solid fa-pause");
        // playMusic.textContent="Pause Music!"
        playMusic.removeChild(playMusic.firstChild);
        playMusic.appendChild(img);
        playMusicboalian=true;
    }else{
        audioElement.pause();
        playMusicboalian=false;
        const img = document.createElement('i');
        img.setAttribute('class',"fa-solid fa-play");
        // playMusic.textContent="Pause Music!"
        playMusic.removeChild(playMusic.firstChild);
        playMusic.appendChild(img);
}
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme==='dark'){
        toggleSwitch.checked=true;
        darkMode();
    }
}


function myFunction() {
    var humgergerNav = document.getElementById("myTopnav");
    const hamburgerBtn=document.getElementById("hamburgerBtn");
    console.log(humgergerNav.children[4].children);
    if (humgergerNav.className === "topnav") {
      humgergerNav.className += " responsive";
    //   humgergerNav.setAttribute('data-aos','zoom-out');
      hamburgerBtn.className='fa-solid fa-xmark'
    } else {
      humgergerNav.className = "topnav";
      hamburgerBtn.className='fa fa-bars'
    }
  }



  const menuBars = document.getElementById('menu-bars');
  const overlay = document.getElementById('overlay');
  const nav1 = document.getElementById('nav-1');
  const nav2 = document.getElementById('nav-2');
  const nav3 = document.getElementById('nav-3');
  const nav4 = document.getElementById('nav-4');
  
  function toggleNav(){
      menuBars.classList.toggle('change');
      overlay.classList.toggle('overlay-active');
      if (overlay.classList.contains('overlay-active')){
          overlay.classList.remove('overlay-slide-left');
          overlay.classList.add('overlay-slide-right');
          nav1.classList.remove('slide-out-1');
          nav1.classList.add('slide-in-1');
          nav2.classList.remove('slide-out-2');
          nav2.classList.add('slide-in-2');
          nav3.classList.remove('slide-out-3');
          nav3.classList.add('slide-in-3');
          nav4.classList.remove('slide-out-4');
          nav4.classList.add('slide-in-4');
      }else{
          overlay.classList.remove('overlay-slide-right');
          overlay.classList.add('overlay-slide-left');
          nav1.classList.remove('slid-in-1');
          nav1.classList.add('slide-out-1');
          nav2.classList.remove('slid-in-2');
          nav2.classList.add('slide-out-2');
          nav3.classList.remove('slid-in-3');
          nav3.classList.add('slide-out-3');
          nav4.classList.remove('slid-in-4');
          nav4.classList.add('slide-out-4');

      }
  }
  
  
  menuBars.addEventListener('click',toggleNav);
  nav1.addEventListener('click',toggleNav);
  nav2.addEventListener('click',toggleNav);
  nav3.addEventListener('click',toggleNav);
  nav4.addEventListener('click',toggleNav);
