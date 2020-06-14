const slider = tns({
    container: '.carousel__inner',
    controls: false ,
    nav: false,
    speed: 500 
});

document.querySelector('.prev').addEventListener('click' , function () {
    slider.goTo('prev');
  }); 
  document.querySelector('.next').addEventListener('click' , function () {
    slider.goTo('next');
  }); 