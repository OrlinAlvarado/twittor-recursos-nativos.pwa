

class Camera {
  constructor( videoNode ){
    this.videoNode = videoNode;
    console.log('Camara class Init');
  }

  turnOn() {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 300,
        height: 300,
      }
    }).then( stream => {
      this.videoNode.srcObject = stream;
      this.stream = stream;
    });
  }

  turnOff() {

  }
}