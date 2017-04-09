 /***************
    JS para Parallax
***************/

  $(document).ready(function(){
      $('.parallax').parallax();
    });

/***************
    JS Para scroll en la página
***************/
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
      



/***************
    JS Para Zoom en Portfolio
***************/
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  /***************
    JS Para ScrollTop
	***************/
  $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
        $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
         });
        
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });        

      