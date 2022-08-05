$('document').ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $("input[name='rejection']").click(function(){
        if($("input[name='reception']").prop("checked")===true){
     $("input[name='reception']").prop("checked", false);
        } 
        else {
            $("input[name='reception']").prop("checked", true);
        }
      });
    $("input[name='reception']").click(function(){
        if($("input[name='rejection']").prop("checked")===true){
     $("input[name='rejection']").prop("checked", false);
        } 
        else {
            $("input[name='rejection']").prop("checked", true);
        }
      });
});