$(function(){
    $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
    
    
    
    
    
    
    $('.slider_brend').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    })
    $('.slider_rev').slick({
        
        centerMode: true,
        centerPadding: '320px',
        slidesToShow: 1,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '320px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '320px',
        slidesToShow: 3,
      }
    }
  ]
    })
})