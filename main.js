Webcam.set ({
    width:350,
    height:200,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
Webcam.snap(function(data_uri){
    document.getElementById("divTAGagain123").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
})
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S0wryNhRl/model.json',modelLoaded);

function modelLoaded() {
    console.log("devanshwhitehat")
}
function identify() {
Image1=document.getElementById("captured_image");
classifier.classify(Image1,  gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("spantime1").innerHTML=results[0].label;
        document.getElementById("spantime2").innerHTML=results[0].confidence.toFixed(1);
    }
}