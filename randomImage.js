console.log("Hello")
var Num = 1
var myImages = new Array(
    "images/banoffe-pies-poster.jpg",
    "images/2_orig.jpg",
    "images/dj-sports---ck-a3_2x.jpg",
    "images/midland-gif-frame2.gif",
    "images/central_and_manamdeartboard1@2x_2x.png",
    "images/boogaloo_baba1@3x_2x.png",
    "images/bruce-a3_2x.jpg",
    "images/boogie-nights-poster_2x.jpg",
    "images/we-are-fsvtl-4-square_2x.jpg",
    "images/fio52_2x.jpg",
    "images/holly_1@3x_2x.png",
    "images/jon-rust-poster_2x.jpg",
    "images/kornel_2x.png",
    "images/meraki1_2x.png",
    "images/ourhouse1@2x_2x.png",
    "images/plo_man_poster-01_2x.jpg",
    "images/rezzies_posterartboard_1@3x_2x.jpg",
    "images/the-bakery_2x.jpg",
    "images/peach_a3artboard_1-u20460_2x.png",
    "images/residents_a3_onlineartboard_1@3x_2x.png",
    "images/krish@3x_2x.jpg",
    "images/ramzi_poster_a3artboard_1@4x_2x.png",
    "images/salt_mines_a3artboard_1@4x_2x.png",
    "images/neuropol_2x.jpg",
    "images/CThruA3.png",
    "images/priori1@3x_2x.png",
    "images/PosterArtboard_1@4x.png",
    "images/003_A3Artboard_1@3x.png",
    "images/LNTG_A3_OnlineArtboard_1@3x.png",
    "images/AD.jpg",
    "images/RezziesJanA3Artboard1@3x.png",
    "images/SJ_BannerArtboard_1@3x.png",
    "images/br2.png",
    "images/ED_A3Artboard_@4x.png",
    "images/Livity001.png",
    "images/Insta---White-Shirt.jpeg",
    "images/The_Cause_SquareArtboard1.png",
    "images/OffWeekPortraitArtboard.png",
    "images/028Artboard_1@4x.png",
    "images/029.png",
    "images/027Artboard_4x.png",
    "images/OpeningParty1202Artboard.png",
    "images/willow02.png",
    "images/image1.png")


    var randomNum = Math.floor(Math.random() * (myImages.length));

function randomImage() {

        document.write("<div 'col-md-4 col-md-offset-4'><img src=" + myImages[randomNum] + "></div>")};

