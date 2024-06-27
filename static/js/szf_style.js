window.onload = function() {
  // $(".drop-select").dropDownImgText({
  //   tag: ".select",
  //   text: ".text",
  //   arrow: ".arrow-icon",
  //   drop: ".dropdown-menu",
  //   label: ".a"
  // });
  jQuery(".drop-select .select").dropDownFun({
    tagSiblings: ".dropdown-menu",
    optionItem: ".dropdown-menu a",
    optionBool: true,
    cur: "cur"
  });
  $(".szf_cm-tab").tabSwitch({
    tabHead: ".szf_tabPanel .panel",
    tabCont: ".szf_tabCont .szf_tabItem",
    cur: "cur"
  });
  $(".szf_banner .cm-banner-img a").simpleSwitch({
    num: ".szf_banner .cm-banner-btn span",
    text: ".szf_banner .cm-banner-text p",
    className: "cur",
    playTime: 4000
  });
  $(".szf_news-banner .cm-banner-img a").simpleSwitch({
    num: ".szf_news-banner .cm-banner-btn span",
    className: "cur",
    playTime: 4000
  });
  $(".szf_news-banner1 .szf_banner-img1 a").simpleSwitch({
    num: ".szf_news-banner1 .szf_banner-btn1 span",
    text: ".szf_news-banner1 .szf_banner-text p",
    prev: ".szf_news-banner1 .szf_btn-lf",
    next: ".szf_news-banner1 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_news-tab").tabSwitch({
    tabHead: ".szf_newsTabPanel .panel",
    tabCont: ".szf_newsTabContent .szf_newsTabItem",
    cur: "cur"
  });
  $(".szf_data-tab").tabSwitch({
    tabHead: ".szf_dataTabPanel .panel",
    tabCont: ".szf_dataTabCont .szf_dataItem",
    cur: "cur"
  });
  $(".szf_dataBanner0 .szf-banner-img0 .szf_a0").simpleSwitch({
    prev: ".szf_dataBanner0 .szf_btn-lf",
    next: ".szf_dataBanner0 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner1 .szf-banner-img1 .szf_a1").simpleSwitch({
    prev: ".szf_dataBanner1 .szf_btn-lf",
    next: ".szf_dataBanner1 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner2 .szf-banner-img2 .szf_a2").simpleSwitch({
    prev: ".szf_dataBanner2 .szf_btn-lf",
    next: ".szf_dataBanner2 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner3 .szf-banner-img3 .szf_a3").simpleSwitch({
    prev: ".szf_dataBanner3 .szf_btn-lf",
    next: ".szf_dataBanner3 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner4 .szf-banner-img4 .szf_a4").simpleSwitch({
    prev: ".szf_dataBanner4 .szf_btn-lf",
    next: ".szf_dataBanner4 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner5 .szf-banner-img5 .szf_a5").simpleSwitch({
    prev: ".szf_dataBanner5 .szf_btn-lf",
    next: ".szf_dataBanner5 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(".szf_dataBanner6 .szf-banner-img6 .szf_a6").simpleSwitch({
    prev: ".szf_dataBanner6 .szf_btn-lf",
    next: ".szf_dataBanner6 .szf_btn-rt",
    className: "cur",
    playTime: 4000
  });
  $(window).scroll(function() {
    var gun = $(document).scrollTop();
    if (gun >= 320) {
      $(".szf_header-hidden").fadeIn();
    } else {
      $(".szf_header-hidden").fadeOut();
    }
  });
  $(window).scroll(function() {
    var gun = $(document).scrollTop();
    if (gun >= 480) {
      $(".szf_header-hidden1").fadeIn();
    } else {
      $(".szf_header-hidden1").fadeOut();
    }
  });
  $(".szf_hisFile").tabSwitch({
    tabHead: ".szf_hisTabPanel .panel",
    tabCont: ".szf_hisTabCont .szf_hisTabItem",
    cur: "cur"
  });
  var i = 0;
  var w = $(".szf_hisTabPanelBlock .panel").outerWidth(true);
  var len = $(".szf_hisTabPanelBlock .panel").length;

  $(".szf_lfBtn").click(function() {
    i++;
    if (i > len - 4) {
      $(".szf_lfBtn").addClass("cur");
      $(".szf_rtBtn").removeClass("cur");
      $(".szf_lfBtn").css("cursor", "not-allowed");
      $(".szf_rtBtn").css("cursor", "pointer");
      i = len - 4;
    } else {
      $(".szf_lfBtn").removeClass("cur");
      $(".szf_rtBtn").addClass("cur");
      $(".szf_lfBtn").css("cursor", "pointer");
      $(".szf_rtBtn").css("cursor", "not-allowed");
      $(".szf_hisTabPanelBlock").animate({ left: -i * w }, 600);
    }
    if (i < 0) {
      $(".szf_rtBtn").addClass("cur");
      $(".szf_rtBtn").css("cursor", "not-allowed");
    } else {
      $(".szf_rtBtn").removeClass("cur");
      $(".szf_rtBtn").css("cursor", "pointer");
    }
  });
  $(".szf_rtBtn").click(function() {
    i--;
    if (i < 0) {
      $(".szf_rtBtn").addClass("cur");
      $(".szf_rtBtn").css("cursor", "not-allowed");
      i = 0;
    } else {
      $(".szf_rtBtn").removeClass("cur");
      $(".szf_rtBtn").css("cursor", "pointer");
      $(".szf_hisTabPanelBlock").animate({ left: -i * w }, 600);
    }
    if (i > len - 4) {
      $(".szf_rtBtn").addClass("cur");
      $(".szf_lfBtn").css("cursor", "not-allowed");
    } else {
      $(".szf_lfBtn").removeClass("cur");
      $(".szf_lfBtn").css("cursor", "pointer");
    }
  });
};
/*
var swiper5 = new Swiper('.ly-tp', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slideToClickedSlide: true,//设置为true则点击slide会过渡到这个slide。
    initialSlide: 1,
    slidesPerView: 1.5,
    // slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$('.ly-tp .swiper-slide').on("click",function(){
    //mySwiper.activeIndex   过渡到的 slide 位置 
    mySwiper.slideTo(mySwiper.activeIndex, 1000, false)//切换到指定slide，速度为1秒
    
});
// var swiper = new Swiper(".zy-swiper-view2", {
//     // slidesPerView: 5,
//     slidesPerView:"auto",
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },


// });
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

*/
//   var swiper = new Swiper(".zy-swiper-fw", {
//     // slidesPerView: 5,
//     // spaceBetween: 3,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     // loop: true,
//     // width:300
// });