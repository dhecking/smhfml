import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  stream: MediaStream;
  cameraView: HTMLVideoElement;
  cameraOutput: HTMLImageElement;
  cameraSensor: HTMLCanvasElement;
  cameraTrigger: HTMLButtonElement;

  constructor() { }

  ngOnInit() {

    this.cameraView = document.querySelector("#camera--view");
    this.cameraOutput = document.querySelector("#camera--output");
    this.cameraSensor = document.querySelector("#camera--sensor");
    this.cameraTrigger = document.querySelector("#camera--trigger");

    this.cameraStart();

  }

  ngOnDestroy(): void {

    this.cameraStop();

  }

  cameraStart() {
    let deviceId: string;

    navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
      devices = devices.filter((d) => d.kind === 'videoinput');
      console.log(devices);
      deviceId =  devices[0].deviceId;
    });

    // const constraints = { video: {deviceId}, audio: true };
    const hdConstraints = { video: {width: {min: 1280}, height: {min: 720}} };

    navigator.mediaDevices.getUserMedia(hdConstraints)
      .then((stream: MediaStream) => {
        this.stream = stream;
        this.cameraView.srcObject = stream;
      })
      .catch(error => {
        console.log(error.message);
      });

    this.cameraTrigger.onclick = () => {
      this.cameraSensor.width = this.cameraView.videoWidth;
      this.cameraSensor.height = this.cameraView.videoHeight;
      this.cameraSensor.getContext("2d").drawImage(this.cameraView, 0, 0);
      this.cameraOutput.src = this.cameraSensor.toDataURL("image/webp");
      this.cameraOutput.classList.add("taken");
    };

  }

  cameraStop() {
      this.stream.getVideoTracks().forEach(track => track.stop());
      this.cameraView.srcObject = null;
  }

}
