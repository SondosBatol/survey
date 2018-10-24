$(document).ready(function() {

  $(".create-survey-page .right-side-content li").hover(function() {
      $(this).toggleClass("active")
  });


  $("body").on('click', ".create-survey-page .right-side-content li", function(e) {
      e.preventDefault();
      $('html,body').animate({
              scrollTop: $('#end').offset().top
          },
          'slow');

  });
  /*var survey_form = $(".create-survey-page .right-side-content li");
  var att =survey_form.attr('id');
  survey_form.on("click",function(){
    var ss = $('.'+ this.id);
    ss.clone().appendTo(".left-side");
    
  });*/
  $("body").on('click', ".survey-form .survey-add-new", function() {
      $('<li><input type="text" class="form-control" placeholder=" الأجابه الثالثه"><span class="remove-this shadow "><i class="fas fa-minus"></i></span></li>').insertBefore(this);
      //  $(this).parent().append('<li><input type="text" class="form-control" placeholder=" الأجابه الثالثه"><span class="remove-this shadow "><i class="fas fa-minus"></i></span></li>')
  });
  $('body').on('click', ".survey-form .remove-this", function() {
      $(this).parent().hide(200)
  });
  $("body").on("mouseenter", ".survey-form", function() {
      $(this).addClass('survey-form_active');
  });
  $("body").on("mouseleave", ".survey-form", function() {
      $(this).removeClass('survey-form_active');
  });

  var enter_text = ' <div class="enter-text survey-form"> <span class="remove-this close-survey-form"><i class="fas fa-times"></i></span> <h5 class="survey-form-title"> <img class="form-title-icon" src="images/survey icons/font-green.svg"> أدخل النص </h5> <div class="survey-form-block"> <input type="text" class="form-control" placeholder=" ادخل السؤال هنا"> </div> </div>'
  $("body").on('click', '#enter-text', function() {
      $(".left-side").append(enter_text)
  });
  var check_box = '  <div class="check-box survey-form"> <span class="remove-this close-survey-form"><i class="fas fa-times"></i></span> <h5 class="survey-form-title"> <img class="form-title-icon" src="images/survey icons/checked-green.svg"> صندوق الأختيار </h5> <div class="survey-form-block"> <input type="text" class="form-control" placeholder=" ادخل السؤال هنا"> <div class="goup-answer col-4"> <ul class="list-unstyled"> <li> <input type="text" class="form-control" placeholder=" الأجابه الأول"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li> <input type="text" class="form-control" placeholder=" الأجابه الثانيه"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li> <input type="text" class="form-control" placeholder=" الأجابه الثالثه"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li class="survey-add-new"> <span class="survey-add-new-icon"><i class="fas fa-plus"></i></span> <span class="survey-add-new-text">أضافه أجابه</span> </li> </ul> </div> </div> </div>'
  $("body").on('click', '#check-box', function() {
      $(".left-side").append(check_box)
  });
  var check_multiple = ' <div class="check-multiple survey-form"> <span class="remove-this close-survey-form"><i class="fas fa-times"></i></span> <h5 class="survey-form-title"> <img class="form-title-icon" src="images/survey icons/list-button-green.svg"> الأختيار من متعدد </h5> <div class="survey-form-block"> <input type="text" class="form-control" placeholder=" ادخل السؤال هنا"> <div class="goup-answer col-4"> <ul class="list-unstyled"> <li> <input type="text" class="form-control" placeholder=" الأجابه الأول"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li> <input type="text" class="form-control" placeholder=" الأجابه الثانيه"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li> <input type="text" class="form-control" placeholder=" الأجابه الثالثه"> <span class="remove-this shadow "> <i class="fas fa-minus"></i> </span> </li> <li class="survey-add-new"> <span class="survey-add-new-icon"><i class="fas fa-plus"></i></span> <span class="survey-add-new-text">أضافه أجابه</span> </li> </ul> </div> </div> </div>'
  $("body").on('click', '#check-multiple ', function() {
      $(".left-side").append(check_multiple)
  });
  $('body').on("click", ".survey-form .survey-form-title", function() {
      $(this).next().slideToggle();
      $(this).find('i').toggleClass("i_active")

  });
  if ($(window).width() > 750) {
      var scrollTop = 0;
      $(window).scroll(function() {
          scrollTop = $(window).scrollTop();
          if (scrollTop > 240) {
              $(".create-survey-page .right-side").css('position', 'fixed')
          } else if (scrollTop < 100) {
              $(".create-survey-page .right-side").css('position', 'relative')
          }

      });
  }

  $('body').on("click", ".create-survey-page  .menu-mobile", function() {
      $(".create-survey-page .right-side").toggleClass('right-side_active')
  });
});

