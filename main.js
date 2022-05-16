$(function(){
    $('.responsive').slick({

  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}),
    
    
  
    $('.responsive1').slick({
        
        centerMode: true,
        centerPadding: '320px',
        slidesToShow: 1,
        responsive: [
    {
      breakpoint: 600,
      settings: {
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
    })
})