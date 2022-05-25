Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camara = document.getElementById("camara");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="capured" src="'+data_url+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/t61n6nIA7/model.json',modlLoaded);

function modlLoaded (){
    console.log("model_loaded");
}