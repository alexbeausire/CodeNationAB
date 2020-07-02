
console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "images/image.png";




function displayAllImages() {
    document.write("<img src=" + backgroundImage[backgroundImage.length - 1] + "></div>")
    for (i=backgroundImage.length - 2; i>=0;i--) {
        document.write("<div class='imglist'><img src=" + backgroundImage[i] + "></div>");
    };
};
