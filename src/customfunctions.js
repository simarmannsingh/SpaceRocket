const navSlide = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navlinks = document.querySelector('.navlinks');
    
    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('nav-active');
    });
  }
  
  navSlide();