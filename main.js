Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints:{
        facingMode: 'environment'
    }
});
cam = document.getElementById("camera");
Webcam.attach(cam);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="image_taken" src="'+data_uri+'" > ';
    });
}

console.log("ML5 Version -",ml5.version);

classifier = ml5.imageClassifier('MobileNet', Modelloaded);
function Modelloaded() {
    console.log("Model Loaded !");
}

function check() {
    img = document.getElementById("image_taken");
    classifier.classify(img , gotResult);
}
function gotResult(error , result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("answer").innerHTML = result[0].label;
    }
}