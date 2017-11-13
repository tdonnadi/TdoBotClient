export function speak(text) {
  if ('speechSynthesis' in window) {  // check that the browser support voice synthesis
    // Create a new instance of SpeechSynthesisUtterance
    var msg = new SpeechSynthesisUtterance();
  
    // Set the text.
    msg.text = text;
    // msg.text = "sur France 2 à 20h";
  
    // Set the attributes.
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
  
    //  set the utterance instance's voice attribute.
    msg.lang = "fr-FR";
    msg.name = "Google français";
    msg.voiceURI = "Google français";
  
    // Queue this utterance.
    window.speechSynthesis.speak(msg);
    }
}