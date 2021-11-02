// $(document).ready(function(){
  let aboutoffset=$(".gym").offset().top;
  console.log(aboutoffset);
  $(window).scroll(function(){
  let wscroll =$(window).scrollTop();
    if(wscroll > aboutoffset - 100)  {
        
        $(".navbar").css("backgroundColor","rgba(0,0,0,9)");   
        $("#btnbtn").fadeIn(1000)
    }
    else{
      $(".navbar").css("backgroundColor","#252A34");
      $("#btnbtn").fadeOut(1000);
    }
  });
  $("#btnbtn").click(function(){
    $("html,body").animate({scrollTop:0},2000);
    //بتاعي يساوي صفر و لكن مش محبوبه scroll دي طريقه تانيه عشان اخلي ال 
    // $(window).scrollTop(0)
    });
    // $("#think").click(function(){
    //   $("html,body").animate({scrollTop:$(".think").offset().top-50},2000)
    // });
    // $("#navlink").click(function(){
    //   $("html,body").animate({scrollTop:$(".gym").offset().top-50},2000)
    // });
    // $("#Programs").click(function(){
    //   $("html,body").animate({scrollTop:$(".Programs").offset().top-50},2000)
    // });
    // $("#trainers").click(function(){
    //   $("html,body").animate({scrollTop:$(".trainers").offset().top-50},2000);
    // });
    // $("#contact").click(function(){
    //   $("html,body").animate({scrollTop:$(".contact").offset().top-50},2000)
    // });
/**
  e.target واحده و كل الفكره اني مسكت كل عنصر لواحده باستخدام ال function هي نفس اللي فوق بس باستخدام 
   attr بتاعت كل عنصر باستخدام ال  href وبعد كدا جبت ال 
  href بتاع كل  offset().top وبعد كدا جبت ال 
  بتاعه id وانا لما اجي انادي علي عنصر في الجي كويري لازم استخدم # عشان انادي علي تاعنصر باستخدام ال  id+# مساويه لل  hreh ملحوظه ال 
 */
    $("a").click(function(e){
     let aHref= $(e.target).attr("href");
     console.log(aHref)
     let sectionHref=$(aHref).offset().top-50
      $("html,body").animate({scrollTop:sectionHref},2000)
    })
// $(window).scroll(function(e){
//   let aHref= $(e.target).attr("href");
//    console.log(aHref)
//    let sectionHref=$(aHref).offset()
//   if($(window).scrollTop()==sectionHref){
//   $(e.target).addClass("active");
//   $(e.target).parent().siblings().find("a").removeClass("active");

//   }
// })

//////////color box//////////////////
$(".fa-cog ").click(function(){
  let iinner=$(".color").innerWidth();
  if($(".color").css("left")=="0px"){
    $(".color").animate({left:`-${iinner}`})
  }
  else{
    $(".color").animate({left:`0px`});

  }
});

///////////////// pure javascript/////////////////////
// let facog=document.querySelector(".fa-cog");
// facog.onclick=function(){
//   let color=document.querySelector(".color");
//   if(color.style.left==-300+"px"){
//     color.style.left="0px"
//   }
//   else{
//     color.style.left="-300px"
//   }
// }
// });
// /////////////////////////////////////////////////////
$("span").click(function(e){
let bgcolor=$(e.target).css("backgroundColor");
console.log(bgcolor)
$("nav").css("backgroundColor",`${bgcolor}`)
});

// /////////////////////////////////////////////
//////////////////loadingpage//////////////////
$(document).ready(function(){
  $("#loadingscreen").fadeOut(5000,function(){
    $("body").css("overflow","auto");
    $("body").css("overflow-x","hidden")
  })
})

// ///////////////////////////////
$("nav li a").click(function(e){
  $(e.target).addClass("active");
  $(e.target).parent().siblings().find("a").removeClass("active");
})

