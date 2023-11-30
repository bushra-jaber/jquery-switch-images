/*$('.wrapper').animate({"width":"100%"},3000)
$('.wrapper').animate({"height":"100vh"},3000,function(){
    $(".wrapper h1").slideDown(3000,function(){
     $(".wrapper .row").addClass("py-5")
        $(".wrapper .col-md-4").fadeIn(3000)
    })
})*/ 
  $('.sub-img').click(function(){
    let img = $(this).attr('src')
    $('.main-img').attr('src', img)
})