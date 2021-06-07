$(function(){
    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active')
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="img/left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="img/right.png" alt="next"></button>',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              dots: false,
            }
          }
        ]
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
      });

});


var modal = document.getElementById("myModal");

var btn = document.getElementById("copy__quest");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}