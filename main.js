var SpeechRecognition = window.webkitSpeechRecognition;
  
var my_agent= new SpeechRecognition();

 
function my_start()
{
    document.getElementById("textbox").innerHTML = ""; 
    my_agent.start();
} 
 
my_agent.onresult = function(event) {

 console.log(event); 
 document.getElementById("textbox").innerHTML = event.results[0][0].transcript;

 agent_speak();

}

function agent_speak(){

    var synth = window.speechSynthesis;

    var speak_data = document.getElementById("textbox").innerHTML;

    var utter_data = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_data);

    Webcam.attach(my_cam);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
     
});

my_cam = document.getElementById('camera');




